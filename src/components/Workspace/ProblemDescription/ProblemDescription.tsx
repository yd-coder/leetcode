import CircleSkeleton from "@/components/Skeletons/CircleSkeleton";
import RectangleSkeleton from "@/components/Skeletons/RectangleSkeleton";
import { Problem } from "@/mockProblems/types/problem";
import {problems} from "@/mockProblems/problems/index";
import React, { useEffect, useState } from "react";
import { AiFillLike, AiFillDislike, AiOutlineLoading3Quarters, AiFillStar } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";
import { BiDetail } from "react-icons/bi";
import { toast } from "react-toastify";

type ProblemDescriptionProps = {
	problem: Problem;
	_solved: boolean;
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem, _solved }) => {
	const { currentProblem, loading, problemDifficultyClass, setCurrentProblem } = useGetCurrentProblem(problem.id);
	const { liked, disliked, solved, setData, starred } = useGetUsersDataOnProblem(problem.id);
	const [updating, setUpdating] = useState(false);

	return (
		<div className='bg-dark-layer-1'>
			{/* TAB标签栏 */}
			<div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden'>
				<div className='flex bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer whitespace-nowrap'>
					<BiDetail className='w-4 h-4 mr-1'/>
					题目描述
				</div>
			</div>

			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-5'>
					{/* 题目数据 */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg text-white font-medium'>{problem?.title}</div>
						</div>
						{!loading && currentProblem && (
							<div className='flex items-center mt-3'>
								<div
									className={`${problemDifficultyClass} inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
								>
									{currentProblem.difficulty}
								</div>
								{(solved || _solved) && (
									<div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s'>
										<BsCheck2Circle />
									</div>
								)}
								<div
									className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6'
								>
									{liked && !updating && <AiFillLike className='text-dark-blue-s' />}
									{!liked && !updating && <AiFillLike />}
									{updating && <AiOutlineLoading3Quarters className='animate-spin' />}

									<span className='text-xs'>{currentProblem.likes}</span>
								</div>
								<div
									className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6'
								>
									{disliked && !updating && <AiFillDislike className='text-dark-blue-s' />}
									{!disliked && !updating && <AiFillDislike />}
									{updating && <AiOutlineLoading3Quarters className='animate-spin' />}

									<span className='text-xs'>{currentProblem.dislikes}</span>
								</div>
								<div
									className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 '
								>
									{starred && !updating && <AiFillStar className='text-dark-yellow' />}
									{!starred && !updating && <TiStarOutline />}
									{updating && <AiOutlineLoading3Quarters className='animate-spin' />}
								</div>
							</div>
						)}

						{/* 骨架屏 */}
						{loading && (
							<div className='mt-3 flex space-x-2'>
								<RectangleSkeleton />
								<CircleSkeleton />
								<RectangleSkeleton />
								<RectangleSkeleton />
								<CircleSkeleton />
							</div>
						)}

						{/* 题目描述 */}
						<div className='text-white text-sm'>
							<div dangerouslySetInnerHTML={{ __html: problem.problemStatement }} />
						</div>

						{/* 题目示例 */}
						<div className='mt-4'>
							{problem.examples.map((example, index) => (
								<div key={example.id}>
									<p className='font-medium text-white '>示例 {index + 1}：</p>
									{example.img && <img src={example.img} alt='' className='mt-3' />}
									<div className='example-card'>
										<pre>
											<strong className='text-white'>输入：</strong> {example.inputText}
											<br />
											<strong>输出：</strong>
											{example.outputText} <br />
											{example.explanation && (
												<>
													<strong>解释：</strong> {example.explanation}
												</>
											)}
										</pre>
									</div>
								</div>
							))}
						</div>

						{/* 题目提示 */}
						<div className='my-8 pb-4'>
							<div className='text-white text-sm font-medium'>提示：</div>
							<ul className='text-white ml-5 list-disc '>
								<div dangerouslySetInnerHTML={{ __html: problem.constraints }} />
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProblemDescription;

/* 获取当前题目数据 */
function useGetCurrentProblem(problemId: string) {
	const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [problemDifficultyClass, setProblemDifficultyClass] = useState<string>("");

	useEffect(() => {
		const getCurrentProblem = async () => {
			setLoading(true);
			const problem = problems[problemId];
			setCurrentProblem(problem);
				// easy, medium, hard
				setProblemDifficultyClass(
					problem.difficulty === "Easy"
						? "bg-olive text-olive"
						: problem.difficulty === "Medium"
							? "bg-dark-yellow text-dark-yellow"
							: " bg-dark-pink text-dark-pink"
				);
			setLoading(false);
		};
		getCurrentProblem();
	}, [problemId]);

	return { currentProblem, loading, problemDifficultyClass, setCurrentProblem };
}

/* 获取目标题目相关用户数据 */
function useGetUsersDataOnProblem(problemId: string) {
	const [data, setData] = useState({ liked: false, disliked: false, starred: false, solved: false });

	useEffect(() => {
		return () => setData({ liked: false, disliked: false, starred: false, solved: false });
	}, [problemId]);

	return { ...data, setData };
}
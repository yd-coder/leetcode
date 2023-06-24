import Link from "next/link";
import React from "react";
import Logout from "../Buttons/Logout";
import {useSetRecoilState} from "recoil";
import {authModalState} from "@/atoms/authModalAtom";
import Image from "next/image";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {BsList} from "react-icons/bs";
import Timer from "../Timer/Timer";
import {useRouter} from "next/router";
import {problems} from "@/mockProblems/problems/index";
import {Problem} from "@/mockProblems/types/problem";

type TopbarProps = {
    problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({problemPage}) => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const router = useRouter();

    const handleProblemChange = (isForward: boolean) => {
        const {order} = problems[router.query.pid as string] as Problem;
        const direction = isForward ? 1 : -1;
        const nextProblemOrder = order + direction;
        const nextProblemKey = Object.keys(problems).find((key) => problems[key].order === nextProblemOrder);

        if (isForward && !nextProblemKey) {
            const firstProblemKey = Object.keys(problems).find((key) => problems[key].order === 1);
            router.push(`/problems/${firstProblemKey}`);
        } else if (!isForward && !nextProblemKey) {
            const lastProblemKey = Object.keys(problems).find(
                (key) => problems[key].order === Object.keys(problems).length
            );
            router.push(`/problems/${lastProblemKey}`);
        } else {
            router.push(`/problems/${nextProblemKey}`);
        }
    };

    return (
        <nav className='relative flex h-[50px] w-full shrink-0 items-center px-10 bg-dark-layer-1 text-dark-gray-7'>
            <div className={`flex w-full items-center justify-between ${!problemPage ? "max-w-[1200px] mx-auto" : ""}`}>
                <Link href='/' className='h-[22px] min-w-[59px] flex-1'>
                    <Image src='./logo.svg' alt='Logo' width={59} height={22}/>
                </Link>

                {problemPage && (
                    <div className='flex items-center gap-4 flex-1 justify-center'>
                        <div
                            className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
                            onClick={() => handleProblemChange(false)}
                        >
                            <FaChevronLeft/>
                        </div>
                        <Link
                            href='/'
                            className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'
                        >
                            <div>
                                <BsList/>
                            </div>
                            <p>Problem List</p>
                        </Link>
                        <div
                            className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
                            onClick={() => handleProblemChange(true)}
                        >
                            <FaChevronRight/>
                        </div>
                    </div>
                )}

                <div className='flex items-center space-x-4 flex-1 justify-end'>
                    <div className='flex items-center text-sm cursor-pointer whitespace-nowrap'>
                        <div onClick={() => setAuthModalState((prev) => ({...prev, isOpen: true, type: "register"}))}>注册</div>
                        <div className='text-dark-gray-6 mx-3'>或</div>
                        <div onClick={() => setAuthModalState((prev) => ({...prev, isOpen: true, type: "login"}))}>登录</div>
                    </div>
                    <Timer/>
                    <div className='cursor-pointer group relative min-w-[30px] min-h-[30px]'>
                        <Image src='./avatar.png' alt='Avatar' width={30} height={30} className='rounded-full'/>
                        <div
                            className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out'
                        >
                            <p className='text-sm'>2395183536@qq.com</p>
                        </div>
                    </div>
                    <Logout/>
                </div>
            </div>
        </nav>
    );
};
export default Topbar;

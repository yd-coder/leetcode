import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import useHasMounted from "@/hooks/useHasMounted";
import {useEffect, useState} from "react";
import AuthModal from "@/components/Modals/AuthModal";
import {useRecoilValue} from "recoil";
import {authModalState} from "@/atoms/authModalAtom";
import {problems} from "@/mockProblems/problems";

export default function Home() {
    const authModal = useRecoilValue(authModalState);
    const [loadingProblems, setLoadingProblems] = useState(true);

    setTimeout(() => {
        setLoadingProblems(false);
    }, 2000);

    const hasMounted = useHasMounted();
    if (!hasMounted) return null;

    return (
        <>
            <main className='bg-dark-layer-2 min-h-screen'>
                {authModal.isOpen && <AuthModal/>}
                <Topbar/>
                <h1
                    className='text-2xl text-center text-white dark:text-gray-400 font-medium mt-10 mb-5'
                >
                    🔥 LeetCode 热题 HOT 100
                </h1>
                <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
                    {loadingProblems && (
                        <div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
                            {problems.map((item, index) => (
                                <LoadingSkeleton key={index}/>
                            ))}
                        </div>
                    )}
                    {!loadingProblems && (
                        <table
                            className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
                            <thead className='text-sm text-gray-400 border-b '>
                            <tr>
                                <th scope='col' className='px-1 py-3 w-0 font-medium'>
                                    状态
                                </th>
                                <th scope='col' className='px-6 py-3 w-0 font-medium whitespace-nowrap'>
                                    题目
                                </th>
                                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                    难度
                                </th>
                                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                    通过率
                                </th>
                                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                    题解
                                </th>
                            </tr>
                            </thead>
                            <ProblemsTable/>
                        </table>
                    )}
                </div>
            </main>
        </>
    );
}

const LoadingSkeleton = () => {
    return (
        <div className='flex items-center space-x-12 mt-4 px-6'>
            <div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
            <div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
            <div className='h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1'></div>
            <div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
        </div>
    );
};

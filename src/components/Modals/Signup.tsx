import {authModalState} from "@/atoms/authModalAtom";
import React, {useState} from "react";
import {useSetRecoilState} from "recoil";
import {useRouter} from "next/router";
import {toast} from "react-toastify";
import Image from "next/image";
import {IoIosCheckbox} from "react-icons/io";
import {MdCheckBoxOutlineBlank} from "react-icons/md";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
    const router = useRouter();
    const setAuthModalState = useSetRecoilState(authModalState);
    const [inputs, setInputs] = useState({phone: "", password: ""});
    const [isAgree, setIsAgree] = useState(false);
    /* 切换表单类型 */
    const handleClick = () => {
        setAuthModalState((prev) => ({...prev, type: "login"}));
    };
    /* 处理表单数据 */
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
    };
    /* 同意协议 */
    const handleAgree = () => {
        setIsAgree((prev) => !prev);
    }
    /* 注册 */
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputs.phone || !inputs.password) return toast.error("请完整填写表单", {position: "top-center"});
        try {
            toast.loading("正在创建您的账户", {position: "top-center"});
            // router.push("/");
        } catch (error: any) {
            toast.error(error.message, {position: "top-center"});
        } finally {
            toast.dismiss("loadingToast");
        }
    };

    return (
        <form className='space-y-5 px-6 pb-4' onSubmit={handleRegister}>
            <Image alt={'logo'} src={'./logo.svg'} width={152} height={100}/>
            <div className='relative'>
                <input
                    onChange={handleChangeInput}
                    type='phone'
                    name='phone'
                    id='phone'
                    className='
        border-2 outline-none sm:text-sm rounded-lg focus:border-blue-500 block w-full
        p-2.5 pl-[82px] bg-dark-input border-transparent placeholder-gray-400 text-white'
                    placeholder='输入手机号'
                />
                <div className='absolute top-[50%] left-0 translate-y-[-50%] w-[64px] sm:text-sm text-center text-gray-400
                after:block after:absolute after:top-0 after:right-0 after:w-[1px] after:h-full after:bg-gray-400'>+86
                </div>
            </div>
            <div className='relative'>
                <input
                    onChange={handleChangeInput}
                    type='password'
                    name='password'
                    id='password'
                    className='
        border-2 outline-none sm:text-sm rounded-lg focus:border-blue-500 block w-full
        p-2.5 bg-dark-input border-transparent placeholder-gray-400 text-white'
                    placeholder='验证码'
                />
                <div
                    className='absolute top-[50%] right-5 translate-y-[-50%] sm:text-sm text-gray-300 cursor-pointer'>获取验证码
                </div>
            </div>

            <button
                type='submit'
                className='w-full focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s'>
                登录 / 注册
            </button>

            <div className='text-sm font-medium text-gray-300 cursor-pointer' onClick={handleClick}>
                账号密码登录
            </div>

            <div className='w-full flex justify-center items-center'>
                {isAgree ? <IoIosCheckbox className='h-5 w-5 text-dark-blue-s mr-1' onClick={handleAgree}/> : <MdCheckBoxOutlineBlank className='h-5 w-5 text-gray-400 hover:text-dark-blue-s mr-1' onClick={handleAgree}/>}
                <span className='text-xs font-medium text-gray-400'>同意力扣<a className='text-gray-300 cursor-pointer'>《用户协议》</a>和<a
                    className='text-gray-300 cursor-pointer'>《隐私协议》</a></span>
            </div>
        </form>
    );
};
export default Signup;

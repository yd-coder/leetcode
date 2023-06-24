import { authModalState } from "@/atoms/authModalAtom";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { toast } from "react-toastify";
import Image from "next/image";
import {IoIosCheckbox} from "react-icons/io";
import {MdCheckBoxOutlineBlank} from "react-icons/md";
type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
	const router = useRouter();
	const [inputs, setInputs] = useState({ phone: "", password: "" });
	const [isAgree, setIsAgree] = useState(false);

	const setAuthModalState = useSetRecoilState(authModalState);
	/* 切换表单类型 */
	const handleClick = (type: "login" | "register" | "forgotPassword") => {
		setAuthModalState((prev) => ({ ...prev, type }));
	};
	/* 处理表单数据 */
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	/* 同意协议 */
	const handleAgree = () => {
		setIsAgree((prev) => !prev);
	}
    /* 登录 */
	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!inputs.phone || !inputs.password) return toast.error("请完整填写表单", {position: "top-center"});
		try {
			// router.push("/");
		} catch (error: any) {
			toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
		}
	};

	return (
		<form className='space-y-5 px-6 pb-4' onSubmit={handleLogin}>
			<Image alt={'logo'} src={'./logo.svg'} width={59} height={22} className='mx-auto'/>
			<h3 className='text-xl font-medium text-white'>账号密码登录</h3>
			<div>
				<input
					onChange={handleInputChange}
					type='phone'
					name='phone'
					id='phone'
					className='
            border-2 outline-none sm:text-sm rounded-lg focus:border-blue-500 block w-full
        	p-2.5 bg-dark-input border-transparent placeholder-gray-400 text-white'
					placeholder='手机/邮箱'
				/>
			</div>
			<div>
				<input
					onChange={handleInputChange}
					type='password'
					name='password'
					id='password'
					className='
            border-2 outline-none sm:text-sm rounded-lg focus:border-blue-500 block w-full
        	p-2.5 bg-dark-input border-transparent placeholder-gray-400 text-white'
					placeholder='输入密码'
				/>
			</div>

			<button
				type='submit'
				className='w-full focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s'
			>
				登录
			</button>

			<div className='flex justify-between'>
				<div className='text-sm font-medium text-gray-300' onClick={() => handleClick("register")}>
					验证码登录
				</div>
				<div className='text-sm font-medium text-gray-300' onClick={() => handleClick("forgotPassword")}>
					忘记密码
				</div>
			</div>

			<div className='w-full flex justify-center items-center'>
				{isAgree ? <IoIosCheckbox className='h-5 w-5 text-dark-blue-s mr-1' onClick={handleAgree}/> : <MdCheckBoxOutlineBlank className='h-5 w-5 text-gray-400 hover:text-dark-blue-s mr-1' onClick={handleAgree}/>}
				<span className='text-xs font-medium text-gray-400'>同意力扣<a className='text-gray-300 cursor-pointer'>《用户协议》</a>和<a
					className='text-gray-300 cursor-pointer'>《隐私协议》</a></span>
			</div>
		</form>
	);
};
export default Login;

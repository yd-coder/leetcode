import React, { useState } from "react";
import { toast } from "react-toastify";
type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
	const [email, setEmail] = useState("");

	const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		toast.success("验证码已发送到您的手机号或电子邮箱", { position: "top-center", autoClose: 3000, theme: "dark" });
	};

	return (
		<form className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8' onSubmit={handleReset}>
			<h3 className='text-xl font-medium  text-white'>重置密码</h3>
			<p className='text-sm text-white '>
				忘记密码了？请输入您的11位手机号或者电子邮箱，我们将发送验证码到您手机或者电子邮箱。
			</p>
			<div>
				<input
					type='email'
					name='email'
					onChange={(e) => setEmail(e.target.value)}
					id='email'
					className='border-2 outline-none sm:text-sm rounded-lg focus:border-blue-500 block w-full
        p-2.5 bg-dark-input border-transparent placeholder-gray-400 text-white'
					placeholder='手机号/邮箱'
				/>
			</div>

			<button
				type='submit'
				className={`w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                bg-brand-orange hover:bg-brand-orange-s `}
			>
				获取验证码
			</button>
		</form>
	);
};
export default ResetPassword;

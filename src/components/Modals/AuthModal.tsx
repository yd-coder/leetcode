import { authModalState } from "@/atoms/authModalAtom";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Signup from "./Signup";
import { useRecoilValue, useSetRecoilState } from "recoil";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
	const authModal = useRecoilValue(authModalState);
	const closeModal = useCloseModal();

	return (
		<>
			{/* 遮罩 */}
			<div
				className='fixed left-0 bottom-0 right-0 top-0 z-[99] flex items-center justify-center bg-black bg-opacity-60'
			>
				{/* 模态框 */}
				<div className='w-full sm:w-[450px] flex justify-center items-center animate-fadeInUp'>
					<div className='relative w-full h-full mx-auto flex items-center justify-center'>
						<div className='rounded-lg shadow relative w-full bg-dark-layer-1 mx-6'>
							<div className='flex justify-end p-2'>
								<button
									type='button'
									className='bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-brand-orange text-white'
									onClick={closeModal}
								>
									<IoClose className='h-5 w-5' />
								</button>
							</div>
							{authModal.type === "login" ? <Login /> : authModal.type === "register" ? <Signup /> : <ResetPassword />}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default AuthModal;

function useCloseModal() {
	const setAuthModal = useSetRecoilState(authModalState);

	const closeModal = () => {
		setAuthModal((prev) => ({ ...prev, isOpen: false, type: "register" }));
	};

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeModal();
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, []);

	return closeModal;
}

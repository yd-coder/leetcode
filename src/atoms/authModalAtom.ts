import { atom } from "recoil";

/* 个人登录模态框状态管理 */
type AuthModalState = {
	isOpen: boolean;
	type: "login" | "register" | "forgotPassword";
};

const initalAuthModalState: AuthModalState = {
	isOpen: false,
	type: "register",
};

export const authModalState = atom<AuthModalState>({
	key: "authModalState",
	default: initalAuthModalState,
});

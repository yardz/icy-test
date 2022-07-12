import { createContext } from "react";

export interface Auth {
	state: "loading" | "authenticated" | "unauthenticated";
	wallet: string;
	setAuth: (wallet: string) => void;
}

export const AuthContext = createContext<Auth>({
	state: "loading",
	wallet: "",
	setAuth: (wallet: string) => {},
});

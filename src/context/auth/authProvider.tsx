import React, { useCallback, useEffect, useState } from "react";
import { getConnectedAccount } from "src/utils/metamask/getConnectedAccount";
import { getMetaMask } from "src/utils/metamask/getMetaMask";

import { AuthContext } from "./authContext";

interface Props {
	children: React.ReactNode;
}
export const AuthProvider: React.FC<Props> = ({ children }) => {
	const [state, setState] = useState<
		"loading" | "authenticated" | "unauthenticated"
	>("loading");
	const [wallet, setWallet] = useState<string>("");
	const setAuth = useCallback(
		(newWallet: string | undefined) => {
			if (newWallet) {
				setState("authenticated");
				setWallet(newWallet);
			}
			if (!newWallet) {
				setState("unauthenticated");
				setWallet("");
			}
		},
		[setState, setWallet]
	);

	useEffect(() => {
		const metaMask = getMetaMask();
		if (!metaMask) {
			return;
		}
		const checkWallet = async () => {
			const account = await getConnectedAccount();
			setAuth(account);
		};
		checkWallet().catch((error) => console.error(error.message));

		metaMask.on("accountsChanged", (accounts) => {
			// @ts-ignore
			setAuth(accounts[0]);
		});
		return () => {
			metaMask.removeAllListeners();
		};
	}, [setAuth]);

	return (
		<AuthContext.Provider
			value={{
				state,
				wallet,
				setAuth,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

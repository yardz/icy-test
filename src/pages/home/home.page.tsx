import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AuthContext } from "src/context/auth";
import { LoadingPage } from "src/pages/loading";
import { connectAccount } from "src/utils/metamask/connectAccount";
import { getMetaMask } from "src/utils/metamask/getMetaMask";

import styles from "./home.page.module.scss";

// import dynamic from "next/dynamic";
// const LoadingPage = dynamic(() =>
// 	import("../loading").then((mod) => mod.LoadingPage)
// );

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
	const { isFallback, push } = useRouter();
	const { state } = useContext(AuthContext);

	if (isFallback || state === "loading") {
		return <LoadingPage />;
	}

	if (state === "authenticated") {
		push("/trending-collections");
		return <LoadingPage />;
	}
	return (
		<div className={styles.HomePage}>
			<h1>Connect your Wallet (Metamask)</h1>
			<button
				onClick={() => {
					if (!getMetaMask()) {
						alert("Please install Metamask!");
						return;
					}
					connectAccount().catch((error: Error) => alert(error.message));
				}}
			>
				Connect
			</button>
		</div>
	);
};

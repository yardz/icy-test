import { getMetaMask } from "../getMetaMask";

export const connectAccount = async (): Promise<string> => {
	const ethereum = getMetaMask();
	if (!ethereum) {
		throw new Error("No MetaMask detected");
	}
	const accounts = await ethereum.request({
		method: "eth_requestAccounts",
	});
	// @ts-ignore
	const account: string | undefined = accounts[0];

	if (!account) {
		throw new Error("No account connected");
	}
	return account;
};

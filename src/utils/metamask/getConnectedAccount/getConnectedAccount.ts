import { getMetaMask } from "../getMetaMask";

export const getConnectedAccount = async (): Promise<string | undefined> => {
	const ethereum = getMetaMask();
	if (!ethereum) return;
	const accounts = await ethereum.request({
		method: "eth_accounts",
	});
	// @ts-ignore
	return accounts[0];
};

import { isBrowser } from "src/utils/isBrowser";

export const getMetaMask = () => {
	if (!isBrowser()) return false;
	return window.ethereum;
};

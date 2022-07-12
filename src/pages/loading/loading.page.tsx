import React from "react";
import { Spin } from "src/components/spin";
import styles from "./loading.page.module.scss";

export interface LoadingPageProps {}

export const LoadingPage: React.FC<LoadingPageProps> = () => {
	return (
		<div className={styles.LoadingPage}>
			<Spin />
		</div>
	);
};

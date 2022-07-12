import React from "react";
import styles from "./spin.module.scss";

export interface SpinProps {}

export const Spin: React.FC<SpinProps> = () => {
	return (
		<span className={styles.spin}>
			<span className={styles.innerSpin}></span>
		</span>
	);
};

import React from "react";
import { TrendingCollection } from "src/graphql/queries/trendingCollections";
import styles from "./trendingCollectionListItem.module.scss";

export interface TrendingCollectionListItemProps {
	trendingCollection: TrendingCollection;
}

export const TrendingCollectionListItem: React.FC<
	TrendingCollectionListItemProps
> = ({ trendingCollection }) => {
	return (
		<div className={styles.TrendingCollectionListItem}>
			<h2>Name: {trendingCollection.name}</h2>
			<span>Symbol: {trendingCollection.symbol}</span>
			<span>Average: {trendingCollection.stats.average}</span>
			<span>Ceiling: {trendingCollection.stats.ceiling}</span>
			<span>Floor: {trendingCollection.stats.floor}</span>
			<span>Total Sales: {trendingCollection.stats.totalSales}</span>
			<span>Volume: {trendingCollection.stats.volume}</span>

			<span className={styles.address}>{trendingCollection.address}</span>
		</div>
	);
};

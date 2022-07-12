import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AuthContext } from "src/context/auth";
import { TrendingCollection } from "src/graphql/queries/trendingCollections";
import { LoadingPage } from "src/pages/loading";
import { TrendingCollectionListItemProps } from "src/components/trendingCollectionListItem";
import dynamic from "next/dynamic";
import styles from "./trendingCollections.module.scss";

const TrendingCollectionListItem = dynamic<TrendingCollectionListItemProps>(
	() =>
		import("src/components/trendingCollectionListItem").then(
			(mod) => mod.TrendingCollectionListItem
		)
);

export interface TrendingCollectionsPageProps {
	trendingCollections: TrendingCollection[];
}

export const TrendingCollectionsPage: React.FC<
	TrendingCollectionsPageProps
> = ({ trendingCollections }) => {
	const { isFallback, push } = useRouter();
	const { state } = useContext(AuthContext);
	console.log({ trendingCollections });
	if (isFallback || state === "loading") {
		return <LoadingPage />;
	}

	if (state === "unauthenticated") {
		push("/");
		return <LoadingPage />;
	}
	return (
		<div className={styles.TrendingCollections}>
			<h1>Trending Collections:</h1>
			<br />
			<div className={styles.collections}>
				{trendingCollections.map((trendingCollection) => (
					<TrendingCollectionListItem
						key={trendingCollection.address}
						trendingCollection={trendingCollection}
					/>
				))}
			</div>
		</div>
	);
};

import to from "await-to-js";
import { GetStaticProps } from "next";
import { apolloClient } from "src/bootstrap";
import {
	trendingCollectionsQuery,
	TrendingCollection,
} from "src/graphql/queries/trendingCollections";
import {
	TrendingCollectionsPage,
	TrendingCollectionsPageProps,
} from "src/pages/trendingCollections";

const revalidate = Number(process.env.NEXT_PUBLIC_REVALIDATE || "1");

export const getStaticProps: GetStaticProps<
	TrendingCollectionsPageProps
> = async () => {
	const [error, response] = await to(
		apolloClient.query({
			query: trendingCollectionsQuery,
		})
	);

	const trendingCollections: TrendingCollection[] =
		response?.data.trendingCollections.edges.map(
			(collections: any) => collections.node
		);

	const props = {
		trendingCollections,
	};
	return {
		props,
		revalidate,
	};
};

export default TrendingCollectionsPage;

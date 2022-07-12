import { gql } from "@apollo/client";

export interface TrendingCollection {
	address: string;
	name: "Kichigai";
	stats: {
		totalSales: number;
		average: number;
		ceiling: number;
		floor: number;
		volume: number;
	};
	symbol: string;
}

export const trendingCollectionsQuery = gql`
	query TrendingCollections {
		trendingCollections(orderBy: SALES, orderDirection: DESC) {
			edges {
				node {
					address
					... on ERC721Contract {
						name
						stats {
							totalSales
							average
							ceiling
							floor
							volume
						}
						symbol
					}
				}
			}
		}
	}
`;

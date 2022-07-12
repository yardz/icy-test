import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
	uri: "https://graphql.icy.tools/graphql",
	cache: new InMemoryCache(),
	headers: {
		"x-api-key": process.env.NEXT_API_KEY || "",
	},
});

import { HomePage, HomePageProps } from "src/pages/home";
import { GetStaticProps } from "next";

const revalidate = Number(process.env.NEXT_PUBLIC_REVALIDATE || "1");

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
	const props = {};
	return {
		props,
		revalidate,
	};
};

export default HomePage;

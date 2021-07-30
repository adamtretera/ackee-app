import Head from "next/head";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
import NavbarLight from "../components/Navbar";
import Recipe from "../components/Recipe";
import SkeletonRecipe from "../components/SkeletonRecipe";
export default function Home() {
	const { data } = useSWR(
		"https://private-anon-3ac1830633-cookbook3.apiary-mock.com/api/v1/recipes",
		fetcher
	);
	if (!data) {
		return (
			<>
				<NavbarLight title="Recepty" />
				<main className=" m-auto px-10 max-w-lg">
					<SkeletonRecipe />
					<SkeletonRecipe />
					<SkeletonRecipe />
				</main>
			</>
		);
	}

	return (
		<>
			<NavbarLight title="Recepty" />
			<main className=" m-auto px-10 max-w-lg">
				{data.map((item) => (
					<Recipe
						key={item.id}
						name={item.name}
						score={item.score}
						id={item.id}
					/>
				))}
			</main>
		</>
	);
}

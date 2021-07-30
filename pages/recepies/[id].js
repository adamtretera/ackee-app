import CardHeader from "../../components/CardHeader";
import ScoreCard from "../../components/ScoreCard";
import StarsForm from "../../components/StarsForm";
export async function getStaticProps(context) {
	const [recipeId] = context.params.id;
	const res = await fetch(
		`https://private-anon-4ba4181933-cookbook3.apiary-mock.com/api/v1/recipes/${recipeId}`
	);
	const data = await res.json();

	if (!data) {
		return {
			notFound: true,
		};
	}
	return {
		props: { data }, // will be passed to the page component as props
	};
}
export async function getStaticPaths() {
	const res = await fetch(
		"https://private-anon-3ac1830633-cookbook3.apiary-mock.com/api/v1/recipes"
	);
	const recepies = await res.json();
	const paths = recepies.map((post) => ({
		params: { id: post.id },
	}));
	return { paths, fallback: "blocking" };
}
const Recipe = ({ data }) => {
	return (
		<div>
			<CardHeader title={data.name} />
			<ScoreCard />
			<div className="px-7 max-w-lg m-auto">
				<p className="text-lg text-text mt-10 font-medium	">{data.info}</p>
				<h3 className="text-xl font-bold tracking-wide  mt-10 text-blue ">
					Ingredience
				</h3>
				<ul
					className="list-disc text-text font-300
					text-lg pl-7 mt-4"
				>
					{data.ingredients.map((ingredient) => (
						<li key={ingredient.id}>{ingredient}</li>
					))}
				</ul>
				<h3 className="text-xl font-bold tracking-wide  mt-10 text-blue ">
					Příprava jídla
				</h3>
				<p className="mt-4 text-lg text-text ">{data.description}</p>
			</div>
			<StarsForm id={data.id} />
		</div>
	);
};

export default Recipe;

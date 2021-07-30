import React from "react";
import { useState } from "react";

function StarRating(id) {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	const onRating = async (i, id) => {
		setRating(i);
		console.log(rating);
		const res = await fetch(
			`https://private-anon-81ba7b30ba-cookbook3.apiary-mock.com/api/v1/recipes/recipeId/ratings`,
			{
				body: JSON.stringify({
					score: rating,
				}),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			}
		);
		const result = await res.json();
		console.log(result);
	};

	return (
		<div className="bg-blue pb-10 pt-4 mt-10">
			<h4 className="text-white text-2xl font-medium py-5 text-center">
				Ohodnoť tento recept
			</h4>
			<div className="flex justify-center items-center gap-4 ">
				{[...Array(5)].map((star, i) => {
					i += 1;
					return (
						<button
							type="button"
							key={i}
							className={
								i <= (hover || rating) ? "text-white " : "text-white opacity-50	"
							}
							onClick={() => onRating(i, id)}
							onMouseEnter={() => setHover(i)}
							onMouseLeave={() => setHover(rating)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								viewBox="0 0 24 24"
								className="fill-current"
							>
								<path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
							</svg>
						</button>
					);
				})}
			</div>
		</div>
	);
}
export default StarRating;

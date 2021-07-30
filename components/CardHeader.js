import React from "react";
import Link from "next/link";
function CardHeader({ title }) {
	return (
		<nav
			style={{ backgroundImage: `url("/img.png")` }}
			className="h-72 sm:h-40 bg-purple bg-no-repeat bg-center bg-cover grid px-7 	"
		>
			<div className=" flex justify-between items-center h-16 ">
				<Link href="/">
					<button className=" text-white text-3xl pr-7">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="0 0 24 24"
							className="fill-current "
						>
							<path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
						</svg>
					</button>
				</Link>
				<Link href="/add">
					<button className="text-white text-3xl" type="submit" form="recipe">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="0 0 24 24"
							className="fill-current "
						>
							<path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
						</svg>
					</button>
				</Link>
			</div>
			<h1 className="flex items-center text-3xl font-500 text-white">
				{title}
			</h1>
		</nav>
	);
}

export default CardHeader;

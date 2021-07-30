import Link from "next/link";
function NavbarLight({ title, back }) {
	return (
		<nav className="text-black shadow flex justify-between items-center h-16 px-7">
			<div className="flex items-center">
				{back ? (
					<Link href="/">
						<button className=" text-blue text-3xl pr-7">
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
				) : null}

				<h1 className="text-2xl font-bolder">{title}</h1>
			</div>
			{back ? (
				<button className="text-blue text-3xl" type="submit" form="recipe">
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
			) : (
				<button className="text-blue text-3xl" type="submit" form="recipe">
					<Link href="/add">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="0 0 24 24"
							className="fill-current "
						>
							<path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
						</svg>
					</Link>
				</button>
			)}
		</nav>
	);
}

export default NavbarLight;

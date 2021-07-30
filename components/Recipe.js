import Link from "next/link";

function Recipe({ name, score, image, id }) {
	return (
		<Link href={`recepies/${id}`}>
			<div className="flex py-7 border-b-2 border-shadow">
				<div className="w-3/6 sm:w-2/6 ">
					<img
						className="rounded-lg"
						src={image ? image : "/small.png"}
						alt={name}
					/>
				</div>
				<div className="px-7">
					<h3 className="font-bold text-blue text-xl">{name}</h3>
					<div className="flex g-3 mt-1">
						{Array.from(Array(4), (e, i) => {
							return (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="17"
									height="17"
									viewBox="0 0 24 24"
									className="fill-current text-purple"
								>
									<path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
								</svg>
							);
						})}
					</div>
					<div className="flex item-center  mt-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
						>
							<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
							<path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path>
						</svg>
						<span className="ml-2">60. min</span>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default Recipe;

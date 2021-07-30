function Recipe() {
	return (
		<div className="flex py-7 border-b-2 border-shadow">
			<div className="w-3/6 sm:w-2/6 h-36 bg-shadow animate-pulse rounded-lg"></div>
			<div className="px-7 w-1/2">
				<h3 className="font-bold text-blue text-xl h-4 bg-shadow animate-pulse"></h3>
				<div className="flex g-3 mt-1 h-4 bg-shadow"></div>
				<div className="flex item-center h-4 mt-2">
					<span className="ml-2 h-4 animate-pulse"></span>
				</div>
			</div>
		</div>
	);
}

export default Recipe;

import React from "react";

export default function FilterBox({
	filter,
	filters,
	setFilters,
	imageSrc,
	imageAlt,
}: {
	filter: string;
	filters: string[];
	setFilters: any;
	imageSrc: string;
	imageAlt: string;
}) {
	return (
		<button
			onClick={() =>
				filters.includes(filter)
					? setFilters(filters.filter((f) => f !== filter))
					: setFilters([...filters, filter])
			}>
			<div className="relative">
				<img
					className={filters.includes(filter) ? "border-4 border-white" : ""}
					src={imageSrc}
					alt={imageAlt}
				/>
				{/* black overlay with 50% opacity */}
				<div className="absolute inset-0 bg-black opacity-50"></div>
				{/* centered text */}
				<h5 className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-xl font-bold">
					{filter}
				</h5>
			</div>
		</button>
	);
}

import React from "react";

export default function CollectionHeading({ title, details }: { title: string; details: string }) {
	return (
		<div className="flex flex-col p-6 pb-0">
			<h3 className="text-2xl md:text-4xl font-bold text-left ">{title}</h3>
			<h2 className="text-lg md:text-2xl font-medium text-left">{details}</h2>
		</div>
	);
}

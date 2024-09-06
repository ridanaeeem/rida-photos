interface PhotoModalProps {
	imageSrc: string;
	imageAlt: string;
	description: string;
	collection: string;
	showLink: boolean;
	stats: string;
	classAdjustments: string;
	tags?: string[];
}

const halfaliveArray: PhotoModalProps[] = [
	{
		imageSrc: "/halfalive.jpg",
		imageAlt: "Perseid meteor shower 2024, one meteor visible",
		description: "There's one meteor visible, can you find it?",
		collection: "concerts",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800",
		classAdjustments: "col-span-3 md:col-span-2 row-span-1",
		tags: ["Concert"],
	},
	{
		imageSrc: "/tessaViolet.gif",
		imageAlt: "Perseid meteor shower 2024, one meteor visible",
		description: "There's one meteor visible, can you find it?",
		collection: "concerts",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Concert"],
	},
	{
		imageSrc: "/tessaViolet3.jpg",
		imageAlt: "Perseid meteor shower 2024, one meteor visible",
		description: "There's one meteor visible, can you find it?",
		collection: "concerts",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Concert"],
	},
	{
		imageSrc: "/tessaViolet4.jpg",
		imageAlt: "Perseid meteor shower 2024, one meteor visible",
		description: "There's one meteor visible, can you find it?",
		collection: "concerts",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Concert"],
	},
];

export default halfaliveArray;

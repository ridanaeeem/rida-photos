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

const perseids2024Array: PhotoModalProps[] = [
	{
		imageSrc: "/perseid.JPG",
		imageAlt: "Perseid meteor shower 2024, one meteor visible",
		description: "There's one meteor visible, can you find it?",
		collection: "perseids2024",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/3.6 • 5s • 23mm • ISO1600",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Astrophotography"],
	},
	{
		imageSrc: "/perseid2.jpg",
		imageAlt: "Perseid meteor shower 2024, one meteor visible",
		description: "There's one meteor visible, can you find it?",
		collection: "perseids2024",
		showLink: false,
		stats: "SONY DSC-RX100M6 • ƒ/5.6 • 10s • 23mm • ISO1600",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Astrophotography"],
	},
	{
		imageSrc: "/perseid3.jpg",
		imageAlt: "Perseid meteor shower 2024, one meteor visible",
		description: "There's one meteor visible, can you find it?",
		collection: "perseids2024",
		showLink: false,
		stats: "SONY DSC-RX100M6 • ƒ/5 • 10s • 23mm • ISO1600",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Astrophotography"],
	},
];

export default perseids2024Array;

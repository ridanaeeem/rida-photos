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

const topsailBeachArray: PhotoModalProps[] = [
	{
		imageSrc: "/starryTSB2.JPG",
		imageAlt: "Night shot of Topsail Beach",
		description: "",
		collection: "topsailBeach",
		showLink: false,
		stats: "",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Landscape", "Astrophotography"],
	},
	{
		imageSrc: "/starryTSB.JPG",
		imageAlt: "Illuminated houses on Topsail Beach at night, with stars in the sky",
		description: "",
		collection: "topsailBeach",
		showLink: false,
		stats: "",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Landscape", "Astrophotography"],
	},
	{
		imageSrc: "/starryTSB3.JPG",
		imageAlt: "Shot of the night sky at Topsail Beach, with higher exposure",
		description: "",
		collection: "topsailBeach",
		showLink: false,
		stats: "",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Astrophotography"],
	},
	{
		imageSrc: "/starryTSB4.JPG",
		imageAlt: "Shot of the night sky at Topsail Beach, with lower exposure",
		description: "",
		collection: "topsailBeach",
		showLink: false,
		stats: "",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Astrophotography"],
	},
	{
		imageSrc: "/nightTSB.jpg",
		imageAlt: "Shot of two girls sitting on the beach under the moonlight",
		description: "",
		collection: "topsailBeach",
		showLink: false,
		stats: "",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Landscape"],
	},
	{
		imageSrc: "/beach.JPG",
		imageAlt: "Shot of girl walking towards the ocean on Topsail Beach",
		description: "",
		collection: "topsailBeach",
		showLink: false,
		stats: "",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Landscape"],
	},
	{
		imageSrc: "/beach2.JPG",
		imageAlt: "Shot of girl walking in the sand",
		description: "",
		collection: "topsailBeach",
		showLink: false,
		stats: "",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Landscape"],
	},
];

export default topsailBeachArray;

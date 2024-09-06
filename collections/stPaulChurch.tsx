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

const stPaulChurchArray: PhotoModalProps[] = [
	{
		imageSrc: "/church5.jpg",
		imageAlt: "Cieling of St Agnes Church in St Paul",
		description: "",
		collection: "stAgnesStPaul",
		showLink: false,
		stats: "",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Art"],
	},
	{
		imageSrc: "/church2.JPG",
		imageAlt: "Statue in St Agnes Church in St Paul, surrounded by candles",
		description: "",
		collection: "stAgnesStPaul",
		showLink: false,
		stats: "",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Art"],
	},
	{
		imageSrc: "/church4.JPG",
		imageAlt: "Close up of the Pieta in St Agnes Church in St Paul",
		description: "",
		collection: "stAgnesStPaul",
		showLink: false,
		stats: "",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Art"],
	},

	{
		imageSrc: "/church3.JPG",
		imageAlt: "Statue in St Agnes Church in St Paul",
		description: "",
		collection: "stAgnesStPaul",
		showLink: false,
		stats: "",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Art"],
	},

	{
		imageSrc: "/church.JPG",
		imageAlt: "Far away shot of the Pieta in St Agnes Church in St Paul, framed by doors",
		description: "",
		collection: "stAgnesStPaul",
		showLink: false,
		stats: "",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Art"],
	},
];

export default stPaulChurchArray;

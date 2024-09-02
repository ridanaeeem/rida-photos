interface PhotoModalProps {
	imageSrc: string;
	imageAlt: string;
	description: string;
	collection: string;
	showLink: boolean;
	stats: string;
	classAdjustments: string;
}

const ducksAndLiliesArray: PhotoModalProps[] = [
	{
		imageSrc: "/waterLily.JPG",
		imageAlt: "white water lily",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/6.3 • 1/2000 • 63.55mm • ISO3200",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/waterLily2.JPG",
		imageAlt: "two white water lilies",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/4.5 • 1/25600 • 72.00mm • ISO5000",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/duck.JPG",
		imageAlt: "baby duck swimming in water",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/4.6 • 1/16000 • 71.25mm • ISO3200",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/duck2.JPG",
		imageAlt: "baby duck swimming in water",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/4.5 • 1/16000 • 72.00mm • ISO3200",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/waterLily3.JPG",
		imageAlt: "four purple water lilies",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/4.0 • 1/20000 • 34.64mm • ISO5000",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/waterLily6.JPG",
		imageAlt: "one bright pink water lily",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/4.5 • 1/20000 • 50.65mm • ISO5000",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/waterLily4.JPG",
		imageAlt: "one pink water lily",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/4.5 • 1/20000 • 72.00mm • ISO5000",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/waterLily5.JPG",
		imageAlt: "three pink water lilies",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/4.5 • 1/20000 • 50.65mm • ISO5000",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/waterLily9.JPG",
		imageAlt: "one pink water lily",
		description: "one pink wa,ter lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/4.0 • 1/16000 • 33.98mm • ISO3200",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/waterLily10.JPG",
		imageAlt: "one pink water lily, blooming",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/4.0 • 1/16000 • 33.98mm • ISO3200",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/duck3.JPG",
		imageAlt: "baby duck moving around in water",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/4.5 • 1/16000 • 72.00mm • ISO3200",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/duck4.JPG",
		imageAlt: "baby duck looking at lilypads in water",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/4.5 • 1/16000 • 40.37mm • ISO3200",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/waterLily12.JPG",
		imageAlt: "one white water lily with pink tips",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/4.5 • 1/5000 • 69.49mm • ISO3200",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/duckTri.JPG",
		imageAlt: "baby duck swimming in water",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/4.5 • 1/16000 • 72.00mm • ISO3200",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/waterLily7.JPG",
		imageAlt: "three magenta water lilies",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/8.0 • 1/8000 • 30.26mm • ISO5000",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/waterLily8.JPG",
		imageAlt: "two pink water lilies",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/5.0 • 1/8000 • 65.97mm • ISO5000",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/waterLily13.JPG",
		imageAlt: "two white water lilies",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/8.0 • 1/1250 • 34.64mm • ISO3200",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/waterLily14.JPG",
		imageAlt: "two white water lilies, up close",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/8.0 • 1/1250 • 71.03mm • ISO3200",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/duck5.JPG",
		imageAlt: "baby duck swimming across water",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/5.0 • 1/16000 • 72.00mm • ISO3200",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/duck6.jpg",
		imageAlt: "duck swimming in water, looking forwards",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/4.5 • 1/16000 • 72.00mm • ISO3200",
		classAdjustments: "col-span-1 row-span-1",
	},
	{
		imageSrc: "/duck7.JPG",
		imageAlt: "duck standing in water",
		description: "water lily",
		collection: "",
		showLink: false,
		stats: "SONY DSC-RX100M6 • f/4.5 • 1/16000 • 72.00mm • ISO3200",
		classAdjustments: "col-span-2 md:col-span-1 row-span-1",
	},
];

export default ducksAndLiliesArray;

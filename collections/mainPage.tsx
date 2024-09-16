import { PhotoProps } from "@/types";
import { collections } from "./collections";
import chicagoStreetArray from "@/collections/chicagoStreet";
import halfaliveArray from "@/collections/halfalive";
import montroseMoonriseArray from "@/collections/montroseMoonrise";
import ducksAndLiliesArray from "./ducksAndLilies";
import perseids2024Array from "./perseids2024";
import topsailBeachArray from "./topsailBeach";
import excelsiorBirdsBeesArray from "./excelsiorBirdsBees";
import mnArboretumArray from "./mnArboretum";
import stPaulChurchArray from "./stPaulChurch";

const mainPageArray: PhotoProps[] = [
	// ducksAndLiliesArray[0],
	{
		imageSrc: "/waterLily.JPG",
		imageAlt: "white water lily",
		description: "water lily",
		collection: "ducksandlilies",
		stats: "SONY DSC-RX100M6 • f/6.3 • 1/2000 • 63.55mm • ISO3200",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Plants"],
		index: 0,
	},
	{
		imageSrc: "/fireworks.JPG",
		imageAlt: "fireworks",
		description: "fireworks",
		collection: "",
		stats: "",
		classAdjustments: "",
		tags: [""],
		index: 0,
	},
	// chicagoStreetArray[2],
	{
		imageSrc: "/chicagoEyes2.JPG",
		imageAlt: "close up of eyes on a building in Chicago",
		description: "",
		collection: "chicagoStreet",
		stats: "SONY DSC-RX100M6 • f/4.5 • 1/500 • 71.52mm • ISO250",
		classAdjustments: "col-span-1 row-span-1",
		index: 0,
		filtered: false,
	},
	{
		imageSrc: "/haSunset.JPG",
		imageAlt: "Sunset",
		description: "Sunset",
		collection: "",
		stats: "",
		classAdjustments: "",
		tags: [""],
		index: 0,
	},
	// montroseMoonriseArray[9],
	{
		imageSrc: "/montrose14.JPG",
		imageAlt: "Lighthouse at Montrose Moonrise Vista Point, with boat passing by",
		description: "",
		collection: "montroseMoonrise",
		stats: "SONY DSC-RX100M6 • ƒ/11 • 1/6400 • 9mm • ISO2000",
		classAdjustments: "col-span-1 md:col-span-2 row-span-1",
		tags: ["Landscape"],
		index: 0,
	},
	// topsailBeachArray[1],
	{
		imageSrc: "/starryTSB.JPG",
		imageAlt: "Illuminated houses on Topsail Beach at night, with stars in the sky",
		description: "",
		collection: "topsailBeach",
		stats: "",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Landscape", "Astrophotography"],
		index: 0,
	},
	{
		imageSrc: "/rb.JPG",
		imageAlt: "rab",
		description: "rab",
		collection: "",
		stats: "",
		classAdjustments: "",
		tags: [""],
		index: 0,
	},
	// mnArboretumArray[29],
	{
		imageSrc: "/mnJapaneseGarden8.JPG",
		imageAlt: "White koi and orange koi swimming in the pond",
		description: "",
		collection: "mnArboretum",
		stats: "",
		classAdjustments: "col-span-2 row-span-2",
		tags: ["Animals"],
		index: 0,
	},
	// mnArboretumArray[8],
	{
		imageSrc: "/mnArboretum4.JPG",
		imageAlt: "Light shining on a yellow flower in the dark forest",
		description: "",
		collection: "mnArboretum",
		stats: "",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Plants"],
		index: 0,
	},
	// ducksAndLiliesArray[13],
	{
		imageSrc: "/duckTri.JPG",
		imageAlt: "baby duck swimming in water",
		description: "water lily",
		collection: "ducksandlilies",
		stats: "SONY DSC-RX100M6 • f/4.5 • 1/16000 • 72.00mm • ISO3200",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Animals"],
		index: 0,
	},
	// chicagoStreetArray[5],
	{
		imageSrc: "/protest.JPG",
		imageAlt: "A protestor with a blindfold in Chicago",
		description: "",
		collection: "chicagoStreet",
		stats: "SONY DSC-RX100M6 • f/4.5 • 1/25600 • 50.65mm • ISO5000",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Street"],
		index: 0,
		filtered: false,
	},
	{
		imageSrc: "/bernini.jpg",
		imageAlt: "A Bernini sculpture",
		description: "bernini",
		collection: "",
		stats: "",
		classAdjustments: "",
		tags: [""],
		index: 0,
	},
	// ducksAndLiliesArray[1],
	{
		imageSrc: "/waterLily2.JPG",
		imageAlt: "two white water lilies",
		description: "water lily",
		collection: "ducksandlilies",
		stats: "SONY DSC-RX100M6 • f/4.5 • 1/25600 • 72.00mm • ISO5000",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Plants"],
		index: 0,
	},
	// stPaulChurchArray[4],
	{
		imageSrc: "/church.JPG",
		imageAlt: "Far away shot of the Pieta in St Agnes Church in St Paul, framed by doors",
		description: "",
		collection: "stAgnesStPaul",
		stats: "",
		classAdjustments: "col-span-1 row-span-1",
		tags: ["Art"],
		index: 0,
	},
	{
		imageSrc: "/bahai.JPG",
		imageAlt: "Dome of the Bahai Temple in Chicago",
		description: "",
		collection: "",
		stats: "",
		classAdjustments: "",
		tags: [""],
		index: 0,
	},
];

export default mainPageArray;

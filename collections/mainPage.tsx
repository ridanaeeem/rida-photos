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
	// collections["ducks-and-lilies"][0],
	ducksAndLiliesArray[0],
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
	// collections["chicago-street"][2],
	chicagoStreetArray[2],
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
	// collections["montrose-moonrise"][9],
	montroseMoonriseArray[9],
	// collections["topsail-beach"][1],
	topsailBeachArray[1],
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
	// collections["mn-arboretum"][29],
	mnArboretumArray[29],
	// collections["mn-arboretum"][8],
	mnArboretumArray[8],
	// collections["ducks-and-lilies"][13],
	ducksAndLiliesArray[13],
	// collections["chicago-street"][5],
	chicagoStreetArray[5],
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
	// collections["ducks-and-lilies"][1],
	ducksAndLiliesArray[1],
	// collections["stpaul-church"][4],
	stPaulChurchArray[4],
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

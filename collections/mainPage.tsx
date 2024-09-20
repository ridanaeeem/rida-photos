import { PhotoProps } from "@/types";
import { collections } from "./collections";
import chicagoStreetArray from "@/collections/chicagoStreet";
import halfaliveArray from "@/collections/halfalive";
import montroseMoonriseArray from "@/collections/montroseMoonrise";
import ducksAndLiliesArray from "./ducksAndLilies";
import perseids2024Array from "./perseids2024";
import topsailBeachArray from "./topsailBeach";
import topsailTimelineArray from "./topsailTimeline";
import excelsiorBirdsBeesArray from "./excelsiorBirdsBees";
import mnArboretumArray from "./mnArboretum";
import stPaulChurchArray from "./stPaulChurch";

const mainPageArray: PhotoProps[] = [
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
	chicagoStreetArray[2],
	{
		imageSrc: "/topsail-beach/haSunset.JPG",
		imageAlt: "Sunset",
		description: "Sunset",
		collection: "",
		stats: "",
		classAdjustments: "",
		tags: [""],
		index: 0,
	},
	montroseMoonriseArray[9],
	topsailTimelineArray[8],
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
	mnArboretumArray[29],
	mnArboretumArray[8],
	ducksAndLiliesArray[13],
	chicagoStreetArray[5],
	// {
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
	ducksAndLiliesArray[1],
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

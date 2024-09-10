import chicagoStreetArray from "@/collections/chicagoStreet";
import halfaliveArray from "@/collections/halfalive";
import montroseMoonriseArray from "@/collections/montroseMoonrise";
import ducksAndLiliesArray from "./ducksAndLilies";
import perseids2024Array from "./perseids2024";
import topsailBeachArray from "./topsailBeach";
import excelsiorBirdsBeesArray from "./excelsiorBirdsBees";
import mnArboretumArray from "./mnArboretum";
import stPaulChurchArray from "./stPaulChurch";

export const collectionsArray = chicagoStreetArray.concat(
	mnArboretumArray,
	excelsiorBirdsBeesArray,
	montroseMoonriseArray,
	ducksAndLiliesArray,
	perseids2024Array,
	topsailBeachArray,
	halfaliveArray,
	stPaulChurchArray
);

export const collections = {
	"chicago-street": chicagoStreetArray,
	"mn-arboretum": mnArboretumArray,
	"excelsior-birds-bees": excelsiorBirdsBeesArray,
	"montrose-moonrise": montroseMoonriseArray,
	"ducks-and-lilies": ducksAndLiliesArray,
	"perseids-2024": perseids2024Array,
	"topsail-beach": topsailBeachArray,
	"halfalive": halfaliveArray,
	"stpaul-church": stPaulChurchArray,
};

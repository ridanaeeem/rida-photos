import mainPageArray from "./mainPage";
import chicagoStreetArray from "@/collections/chicagoStreet";
import montroseMoonriseArray from "@/collections/montroseMoonrise";
import ducksAndLiliesArray from "./ducksAndLilies";
import perseids2024Array from "./perseids2024";
import topsailBeachArray from "./topsailBeach";
import excelsiorBirdsBeesArray from "./excelsiorBirdsBees";
import mnArboretumArray from "./mnArboretum";
import stPaulChurchArray from "./stPaulChurch";
import rainyChicagoArray from "./rainyChicago";
import topsailTimelineArray from "./topsailTimeline";
import halfaliveArray from "@/collections/halfalive";
import motherMotherArray from "./motherMother";

export const personalArray = [
	...mnArboretumArray,
	...excelsiorBirdsBeesArray,
	...montroseMoonriseArray,
	...rainyChicagoArray,
	...ducksAndLiliesArray,
	...topsailBeachArray,
	...topsailTimelineArray,
	...chicagoStreetArray,
	...perseids2024Array,
	...stPaulChurchArray,
];

export const professionalArray = [...halfaliveArray, ...motherMotherArray];

export const collections = {
	"main-page": mainPageArray,
	"chicago-street": chicagoStreetArray,
	"mn-arboretum": mnArboretumArray,
	"excelsior-birds-bees": excelsiorBirdsBeesArray,
	"montrose-moonrise": montroseMoonriseArray,
	"ducks-and-lilies": ducksAndLiliesArray,
	"perseids-2024": perseids2024Array,
	"topsail-beach": topsailBeachArray,
	"topsail-timeline": topsailTimelineArray,
	"stpaul-church": stPaulChurchArray,
	"rainy-chicago": rainyChicagoArray,
	halfalive: halfaliveArray,
	"mother-mother": motherMotherArray,
};

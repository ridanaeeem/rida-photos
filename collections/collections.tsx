import chicagoStreetArray from "@/collections/chicagoStreet";
import halfaliveArray from "@/collections/halfalive";
import montroseMoonriseArray from "@/collections/montroseMoonrise";
import ducksAndLiliesArray from "./ducksAndLilies";
import perseids2024Array from "./perseids2024";
import topsailBeachArray from "./topsailBeach";
import excelsiorBirdsBeesArray from "./excelsiorBirdsBees";
import mnArboretumArray from "./mnArboretum";

const collectionsArray = chicagoStreetArray.concat(
	mnArboretumArray,
	excelsiorBirdsBeesArray,
	montroseMoonriseArray,
	ducksAndLiliesArray,
	perseids2024Array,
	topsailBeachArray,
	halfaliveArray
);

export default collectionsArray;

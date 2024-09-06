"use client";
import React from "react";
import { useState, useEffect } from "react";
import FilterBox from "@/components/FilterBox";
import CollectionThumbnail from "@/components/CollectionThumbnail";
import CollectionHeading from "@/components/CollectionHeading";
import PhotoModal from "@/components/PhotoModal";
import ducksAndLiliesArray from "@/collections/ducksAndLilies";
import perseids2024Array from "@/collections/perseids2024";
import topsailBeachArray from "@/collections/topsailBeach";
import chicagoStreetArray from "@/collections/chicagoStreet";
import halfaliveArray from "@/collections/halfalive";
import montroseMoonriseArray from "@/collections/montroseMoonrise";
import stPaulChurchArray from "@/collections/stPaulChurch";
import collectionsArray from "@/collections/collections";
import { Arimo } from "next/font/google";

const arimo = Arimo({ subsets: ["latin"] });

interface ModalData {
	isOpen: boolean;
	imageSrc: string;
	imageAlt: string;
	description: string;
	collection: string;
	stats: string;
}

interface CollectionPhotoProps {
	imageSrc: string;
	imageAlt: string;
	description: string;
	collection: string;
	showLink: boolean;
	stats: string;
	classAdjustments: string;
	tags?: string[];
}

export default function Collections() {
	const [modalData, setModalData] = useState<ModalData>({
		isOpen: false,
		imageSrc: "",
		imageAlt: "",
		description: "",
		collection: "",
		stats: "",
	});

	const closeModal = () => {
		setModalData({
			isOpen: false,
			imageSrc: "",
			imageAlt: "",
			description: "",
			collection: "",
			stats: "",
		});
	};

	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				closeModal();
			}
		};

		if (modalData.isOpen) {
			window.addEventListener("keydown", handleEsc);
		}

		return () => {
			window.removeEventListener("keydown", handleEsc);
		};
	}, [modalData.isOpen]);

	const [filters, setFilters] = useState<string[]>([]);

	return (
		<div className={`${arimo.className} ${"text-white"}`}>
			<title>Rida Naeem Photography</title>
			<main>
				<div className="bg-gradient-to-b from-[#171719] to-[#171719]">
					{/* <div className="flex flex-col p-2 md:p-5">
						<h2 className="text-2xl text-white">Collections</h2>
					</div> */}

					<PhotoModal
						isOpen={modalData.isOpen}
						imageSrc={modalData.imageSrc}
						imageAlt={modalData.imageAlt}
						description={modalData.description}
						collection=""
						stats={modalData.stats}
					/>

					{modalData.isOpen ? (
						<div className="fixed inset-0 z-10 bg-black bg-opacity-75" onClick={() => closeModal()}></div>
					) : null}

					<div>
						<div className="flex flex-col p-6 py-12">
							<h3 className="text-4xl font-bold text-left py-2">
								Filters Applied: {filters.length == 0 ? "None" : filters.join(", ")}
							</h3>
							<div className="grid grid-cols-2 md:grid-cols-7 gap-3 md:gap-4">
								<FilterBox
									filter="Landscape"
									filters={filters}
									setFilters={setFilters}
									imageSrc="/montrose2.JPG"
									imageAlt="Rocks along the shore at Montrose Moonrise Vista Point"
								/>
								<FilterBox
									filter="Plants"
									filters={filters}
									setFilters={setFilters}
									imageSrc="waterLily10.JPG"
									imageAlt="Water Lily"
								/>
								<FilterBox
									filter="Animals"
									filters={filters}
									setFilters={setFilters}
									imageSrc="duck.JPG"
									imageAlt="duck"
								/>
								<FilterBox
									filter="People"
									filters={filters}
									setFilters={setFilters}
									imageSrc="haSunset.JPG"
									imageAlt="Sunset"
								/>
								<FilterBox
									filter="Astrophotography"
									filters={filters}
									setFilters={setFilters}
									imageSrc="perseid.JPG"
									imageAlt="Perseif Meteor Shower"
								/>
								<FilterBox
									filter="Street"
									filters={filters}
									setFilters={setFilters}
									imageSrc="/chicago7.JPG"
									imageAlt="Skaters in Chicago"
								/>
								<button onClick={() => setFilters([])}>
									<div className="relative">
										<img src="/starryTSB4.JPG" alt="Night sky" />
										{/* black overlay with 50% opacity */}
										<div className="absolute inset-0 bg-black opacity-50"></div>
										{/* centered text */}
										<h5 className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-xl font-bold">
											Clear
										</h5>
									</div>
								</button>
							</div>
						</div>
					</div>

					{filters.length === 0 ? (
						<div>
							<div className="pb-10" id="montroseMoonrise">
								<CollectionHeading
									title="Montrose Moonrise Vista Point"
									details="Chicago, IL. Summer 2023."
								/>
								<div className="grid grid-cols-2 mx-3">
									{montroseMoonriseArray.slice(0, 2).map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											setModalData={setModalData}
											src={photo.imageSrc}
											alt={photo.imageAlt}
											description={photo.description}
											collection={photo.collection}
											stats={photo.stats}
											classAdjustments={photo.classAdjustments}
										/>
									))}
								</div>
								<div className="grid grid-cols-2 md:grid-cols-6 mx-3">
									{montroseMoonriseArray.slice(2).map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											setModalData={setModalData}
											src={photo.imageSrc}
											alt={photo.imageAlt}
											description={photo.description}
											collection={photo.collection}
											stats={photo.stats}
											classAdjustments={photo.classAdjustments}
										/>
									))}
								</div>
							</div>
							<div className="pb-10" id="halfalive">
								<CollectionHeading
									title="Half Alive & Tessa Violet"
									details="House of Blues Boston, MA. Spring 2023."
								/>
								<div className="grid grid-cols-3 md:grid-cols-5 grid-auto-rows minmax(150px, auto) mx-3">
									{halfaliveArray.map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											setModalData={setModalData}
											src={photo.imageSrc}
											alt={photo.imageAlt}
											description={photo.description}
											collection={photo.collection}
											stats={photo.stats}
											classAdjustments={photo.classAdjustments}
										/>
									))}
								</div>
							</div>
							<div className="pb-10" id="ducksandlilies">
								<CollectionHeading title="Ducks & Lilies" details="Saint Paul, MN. Summer 2024." />
								<div className="grid grid-cols-2 md:grid-cols-3 mx-3">
									{ducksAndLiliesArray.map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											setModalData={setModalData}
											src={photo.imageSrc}
											alt={photo.imageAlt}
											description={photo.description}
											collection={photo.collection}
											stats={photo.stats}
											classAdjustments={photo.classAdjustments}
										/>
									))}
								</div>
							</div>
							<div className="pb-10" id="topsailBeach">
								<CollectionHeading title="Topsail Beach" details="Topsail Island, NC. Summer 2024." />
								<div className="grid grid-cols-2 md:grid-cols-3 mx-3">
									{topsailBeachArray.map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											setModalData={setModalData}
											src={photo.imageSrc}
											alt={photo.imageAlt}
											description={photo.description}
											collection={photo.collection}
											stats={photo.stats}
											classAdjustments={photo.classAdjustments}
										/>
									))}
								</div>
							</div>
							<div className="pb-10" id="chicagoStreet">
								<CollectionHeading title="Downtown Chicago" details="Chicago, IL. Summer 2023." />
								<div className="grid grid-cols-2 md:grid-cols-3 mx-3">
									{chicagoStreetArray.map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											setModalData={setModalData}
											src={photo.imageSrc}
											alt={photo.imageAlt}
											description={photo.description}
											collection={photo.collection}
											stats={photo.stats}
											classAdjustments={photo.classAdjustments}
										/>
									))}
								</div>
							</div>
							<div className="pb-10" id="perseids2024">
								<CollectionHeading title="Perseids Meteor Shower 2024" details="MD. Summer 2024." />
								<div className="grid grid-cols-2 md:grid-cols-3 mx-3">
									{perseids2024Array.map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											setModalData={setModalData}
											src={photo.imageSrc}
											alt={photo.imageAlt}
											description={photo.description}
											collection={photo.collection}
											stats={photo.stats}
											classAdjustments={photo.classAdjustments}
										/>
									))}
								</div>
							</div>
							<div className="pb-10" id="stAgnesStPaul">
								<CollectionHeading title="Church of St. Agnes" details="Saint Paul, MN. Summer 2023." />
								<div className="grid grid-cols-2 mx-3">
									{stPaulChurchArray.slice(0, 2).map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											setModalData={setModalData}
											src={photo.imageSrc}
											alt={photo.imageAlt}
											description={photo.description}
											collection={photo.collection}
											stats={photo.stats}
											classAdjustments={photo.classAdjustments}
										/>
									))}
								</div>
								<div className="grid grid-cols-2 md:grid-cols-3 mx-3">
									{stPaulChurchArray.slice(2).map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											setModalData={setModalData}
											src={photo.imageSrc}
											alt={photo.imageAlt}
											description={photo.description}
											collection={photo.collection}
											stats={photo.stats}
											classAdjustments={photo.classAdjustments}
										/>
									))}
								</div>
							</div>
						</div>
					) : (
						<div className="grid grid-cols-2 md:grid-cols-3 mx-3">
							{collectionsArray.map(
								(photo: CollectionPhotoProps) =>
									filters.every((filter) => photo.tags?.includes(filter)) && (
										<CollectionThumbnail
											key={photo.imageSrc}
											setModalData={setModalData}
											src={photo.imageSrc}
											alt={photo.imageAlt}
											description={photo.description}
											collection={photo.collection}
											stats={photo.stats}
											classAdjustments=""
										/>
									)
							)}
						</div>
					)}
				</div>
			</main>
		</div>
	);
}

"use client";
import React from "react";
import { useState, useEffect } from "react";
import FilterBox from "@/components/FilterBox";
import CollectionThumbnail from "@/components/CollectionThumbnail";
import CollectionHeading from "@/components/CollectionHeading";
import PhotoModal from "@/components/PhotoModal";
import { collectionsArray } from "@/collections/collections";
import { collections } from "@/collections/collections";
import { CollectionPhotoProps } from "@/types";
import { ModalData } from "@/types";
import { Arimo } from "next/font/google";

const arimo = Arimo({ subsets: ["latin"] });

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
				<div className="bg-gradient-to-b from-[#171719] to-[#171719] min-h-screen">
					<PhotoModal modalData={modalData} collection="" />

					{modalData.isOpen ? (
						<div className="fixed inset-0 z-10 bg-black bg-opacity-75" onClick={() => closeModal()}></div>
					) : null}

					<div>
						<div className="flex flex-col p-6 py-12">
							<h3 className="text-2xl md:text-4xl font-bold text-left py-2">
								Search for... {filters.join(" & ")}
							</h3>
							<div className="grid grid-cols-3 md:grid-cols-7 gap-3 md:gap-4">
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
											Reset
										</h5>
									</div>
								</button>
							</div>
						</div>
					</div>

					{filters.length === 0 ? (
						<div>
							<div className="pb-10" id="mnArboretum">
								<CollectionHeading
									title="Global Gardens"
									details="Minnesota Landscape Arboretum, MN. Summer 2024."
								/>
								<div className="grid grid-cols-2 md:grid-cols-4 mx-3">
									{collections["mn-arboretum"].map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
										/>
									))}
								</div>
							</div>
							<div className="pb-10" id="excelsiorBirdsBees">
								<CollectionHeading
									title="The Birds and Bees of Excelsior"
									details="Excelsior, MN. Summer 2024."
								/>
								<div className="grid grid-cols-2 md:grid-cols-3 mx-3">
									{collections["excelsior-birds-bees"]
										.slice(0, 12)
										.map((photo: CollectionPhotoProps) => (
											<CollectionThumbnail
												key={photo.imageSrc}
												photo={photo}
												setModalData={setModalData}
											/>
										))}
								</div>
								<div className="grid grid-cols-2 md:grid-cols-4 mx-3">
									{collections["excelsior-birds-bees"]
										.slice(12, 16)
										.map((photo: CollectionPhotoProps) => (
											<CollectionThumbnail
												key={photo.imageSrc}
												photo={photo}
												setModalData={setModalData}
											/>
										))}
								</div>
								<div className="grid grid-cols-2 mx-3">
									{collections["excelsior-birds-bees"]
										.slice(16, 18)
										.map((photo: CollectionPhotoProps) => (
											<CollectionThumbnail
												key={photo.imageSrc}
												photo={photo}
												setModalData={setModalData}
											/>
										))}
								</div>
								<div className="grid grid-cols-3 mx-3">
									{collections["excelsior-birds-bees"]
										.slice(18)
										.map((photo: CollectionPhotoProps) => (
											<CollectionThumbnail
												key={photo.imageSrc}
												photo={photo}
												setModalData={setModalData}
											/>
										))}
								</div>
							</div>
							<div className="pb-10" id="montroseMoonrise">
								<CollectionHeading
									title="Montrose Moonrise Vista Point"
									details="Chicago, IL. Summer 2023."
								/>
								<div className="grid grid-cols-2 mx-3">
									{collections["montrose-moonrise"].slice(0, 2).map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
										/>
									))}
								</div>
								<div className="grid grid-cols-2 md:grid-cols-6 mx-3">
									{collections["montrose-moonrise"].slice(2).map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
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
									{collections["halfalive"].map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
										/>
									))}
								</div>
							</div>
							<div className="pb-10" id="ducksandlilies">
								<CollectionHeading title="Ducks & Lilies" details="Saint Paul, MN. Summer 2024." />
								<div className="grid grid-cols-2 md:grid-cols-3 mx-3">
									{collections["ducks-and-lilies"].map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
										/>
									))}
								</div>
							</div>
							<div className="pb-10" id="topsailBeach">
								<CollectionHeading title="Topsail Beach" details="Topsail Island, NC. Summer 2024." />
								<div className="grid grid-cols-2 md:grid-cols-3 mx-3">
									{collections["topsail-beach"].map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
										/>
									))}
								</div>
							</div>
							<div className="pb-10" id="chicagoStreet">
								<CollectionHeading title="Downtown Chicago" details="Chicago, IL. Summer 2023." />
								<div className="grid grid-cols-2 md:grid-cols-3 mx-3">
									{collections["chicago-street"].map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
										/>
									))}
								</div>
							</div>
							<div className="pb-10" id="perseids2024">
								<CollectionHeading title="Perseids Meteor Shower 2024" details="MD. Summer 2024." />
								<div className="grid grid-cols-2 md:grid-cols-3 mx-3">
									{collections["perseids-2024"].map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
										/>
									))}
								</div>
							</div>
							<div className="pb-10" id="stAgnesStPaul">
								<CollectionHeading title="Church of St. Agnes" details="Saint Paul, MN. Summer 2023." />
								<div className="grid grid-cols-2 mx-3">
									{collections["stpaul-church"].slice(0, 2).map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
										/>
									))}
								</div>
								<div className="grid grid-cols-2 md:grid-cols-3 mx-3">
									{collections["stpaul-church"].slice(2).map((photo: CollectionPhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
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
											photo={photo}
											showLink={true}
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

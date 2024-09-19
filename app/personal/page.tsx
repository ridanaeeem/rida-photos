"use client";
import React, { useState, useEffect } from "react";
import FilterBox from "@/components/FilterBox";
import CollectionThumbnail from "@/components/CollectionThumbnail";
import CollectionHeading from "@/components/CollectionHeading";
import PhotoModal from "@/components/PhotoModal";
import { personalArray } from "@/collections/collections";
import { collections } from "@/collections/collections";
import { PhotoProps, ModalData, defaultPhoto } from "@/types";
import { Arimo } from "next/font/google";

const arimo = Arimo({ subsets: ["latin"] });

export default function Personal() {
	const [modalData, setModalData] = useState<ModalData>({
		photo: defaultPhoto,
		isOpen: false,
		showLink: false,
	});

	for (let i = 0; i < personalArray.length; i++) {
		personalArray[i].index = i;
	}

	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setModalData({
					...modalData,
					showLink: false,
				});
			}
		};
		const handleLeft = (event: KeyboardEvent) => {
			if (event.key === "ArrowLeft") {
				setModalData((prevModalData) => {
					let newIndex = (prevModalData.photo.index - 1 + personalArray.length) % personalArray.length;
					if (filters.length > 0) {
						while (personalArray[newIndex].filtered === false) {
							newIndex = (newIndex - 1 + personalArray.length) % personalArray.length;
						}
					}
					return {
						...prevModalData,
						photo: personalArray[newIndex],
						isOpen: true,
					};
				});
			}
		};
		const handleRight = (event: KeyboardEvent) => {
			if (event.key === "ArrowRight") {
				setModalData((prevModalData) => {
					let newIndex = (prevModalData.photo.index + 1) % personalArray.length;
					if (filters.length > 0) {
						while (personalArray[newIndex].filtered === false) {
							newIndex = (newIndex + 1) % personalArray.length;
						}
					}
					return {
						...prevModalData,
						photo: personalArray[newIndex],
						isOpen: true,
					};
				});
			}
		};
		if (modalData.isOpen) {
			window.addEventListener("keydown", handleEsc);
			window.addEventListener("keydown", handleLeft);
			window.addEventListener("keydown", handleRight);
		}
		return () => {
			window.removeEventListener("keydown", handleEsc);
			window.removeEventListener("keydown", handleLeft);
			window.removeEventListener("keydown", handleRight);
		};
	}, [modalData.isOpen]);

	const [filters, setFilters] = useState<string[]>([]);

	return (
		<div className={`${arimo.className} ${"text-white"}`}>
			<title>Rida Naeem Photography</title>
			<main>
				<div className="bg-gradient-to-b from-[#171719] to-[#171719] min-h-screen">
					<PhotoModal
						modalData={modalData}
						setModalData={setModalData}
						isFiltered={filters.length > 0 ? true : false}
						pageArray={personalArray}
					/>

					<div>
						<div className="flex flex-col p-3 md:p-5 py-12">
							{/* <h3 className="text-2xl md:text-4xl font-bold text-left py-2">
								Look for... {filters.join(" & ")}
							</h3> */}
							<div className="grid grid-cols-3 md:grid-cols-7 gap-3 md:gap-4">
								<FilterBox
									filter="Landscape"
									filters={filters}
									setFilters={setFilters}
									imageSrc="/montrose-moonrise/montrose2.JPG"
									imageAlt="Rocks along the shore at Montrose Moonrise Vista Point"
								/>
								<FilterBox
									filter="Plants"
									filters={filters}
									setFilters={setFilters}
									imageSrc="/ducks-and-lilies/waterLily10.JPG"
									imageAlt="Water Lily"
								/>
								<FilterBox
									filter="Animals"
									filters={filters}
									setFilters={setFilters}
									imageSrc="/ducks-and-lilies/duck.JPG"
									imageAlt="duck"
								/>
								<FilterBox
									filter="People"
									filters={filters}
									setFilters={setFilters}
									imageSrc="/topsail-beach/haSunset.JPG"
									imageAlt="Sunset"
								/>
								<FilterBox
									filter="Astrophotography"
									filters={filters}
									setFilters={setFilters}
									imageSrc="/perseids-2024/perseid.JPG"
									imageAlt="Perseif Meteor Shower"
								/>
								<FilterBox
									filter="Street"
									filters={filters}
									setFilters={setFilters}
									imageSrc="/chicago-street/chicago7.JPG"
									imageAlt="Skaters in Chicago"
								/>
								<button onClick={() => setFilters([])}>
									<div className="relative">
										<img src="/topsail-beach/starryTSB4.JPG" alt="Night sky" />
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
								<div className="grid grid-cols-2 md:grid-cols-4 mx-1 md:mx-3">
									{collections["mn-arboretum"].map((photo: PhotoProps) => (
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
								<div className="grid grid-cols-2 md:grid-cols-3 mx-1 md:mx-3">
									{collections["excelsior-birds-bees"].slice(0, 12).map((photo: PhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
										/>
									))}
								</div>
								<div className="grid grid-cols-2 md:grid-cols-4 mx-1 md:mx-3">
									{collections["excelsior-birds-bees"].slice(12, 16).map((photo: PhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
										/>
									))}
								</div>
								<div className="grid grid-cols-2 mx-1 md:mx-3">
									{collections["excelsior-birds-bees"].slice(16, 18).map((photo: PhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
										/>
									))}
								</div>
								<div className="grid grid-cols-3 mx-1 md:mx-3">
									{collections["excelsior-birds-bees"].slice(18).map((photo: PhotoProps) => (
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
								<div className="grid grid-cols-2 mx-1 md:mx-3">
									{collections["montrose-moonrise"].slice(0, 2).map((photo: PhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
										/>
									))}
								</div>
								<div className="grid grid-cols-2 md:grid-cols-6 mx-1 md:mx-3">
									{collections["montrose-moonrise"].slice(2).map((photo: PhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
										/>
									))}
								</div>
							</div>
							<div className="pb-10" id="ducksAndLilies">
								<CollectionHeading title="Ducks & Lilies" details="Saint Paul, MN. Summer 2024." />
								<div className="grid grid-cols-2 md:grid-cols-3 mx-1 md:mx-3">
									{collections["ducks-and-lilies"].map((photo: PhotoProps) => (
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
								<div className="grid grid-cols-2 md:grid-cols-3 mx-1 md:mx-3">
									{collections["topsail-beach"].slice(0, 3).map((photo: PhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
										/>
									))}
								</div>
								<div className="grid grid-cols-2 md:grid-cols-3 mx-1 md:mx-3">
									{collections["topsail-beach"].slice(3, 6).map((photo: PhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
										/>
									))}
								</div>
								<div className="grid grid-cols-2 md:grid-cols-2 mx-1 md:mx-3">
									{collections["topsail-beach"].slice(6).map((photo: PhotoProps) => (
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
								<div className="grid grid-cols-2 md:grid-cols-3 mx-1 md:mx-3">
									{collections["chicago-street"].map((photo: PhotoProps) => (
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
								<div className="grid grid-cols-2 md:grid-cols-3 mx-1 md:mx-3">
									{collections["perseids-2024"].map((photo: PhotoProps) => (
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
								<div className="grid grid-cols-2 mx-1 md:mx-3">
									{collections["stpaul-church"].slice(0, 2).map((photo: PhotoProps) => (
										<CollectionThumbnail
											key={photo.imageSrc}
											photo={photo}
											setModalData={setModalData}
										/>
									))}
								</div>
								<div className="grid grid-cols-2 md:grid-cols-3 mx-1 md:mx-3">
									{collections["stpaul-church"].slice(2).map((photo: PhotoProps) => (
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
						<>
							{personalArray.filter((photo: PhotoProps) =>
								filters.every((filter) => photo.tags?.includes(filter))
							).length === 0 ? (
								<div className="flex flex-col p-6 pb-12">
									<h3 className="text-2xl md:text-4xl font-bold text-left ">
										{"Looking for... " + filters.join(" & ")}
									</h3>
									<h2 className="text-lg md:text-2xl font-medium text-left">
										No photos found with the selected combination of tags. Click{" "}
										<button onClick={() => setFilters([])}>
											<u>Reset</u>
										</button>{" "}
										to view all photos.
									</h2>
								</div>
							) : (
								<div className="pb-12">
									<CollectionHeading
										title={"Looking for... " + filters.join(" & ")}
										details="Includes photos with the selected combination of tags."
									/>
									<div className="grid grid-cols-2 md:grid-cols-3 mx-1 md:mx-3">
										{personalArray.map((photo: PhotoProps) => {
											if (filters.every((filter) => photo.tags?.includes(filter))) {
												photo.filtered = true;
												return (
													<CollectionThumbnail
														key={photo.imageSrc}
														setModalData={setModalData}
														photo={photo}
														search={true}
													/>
												);
											} else photo.filtered = false;
										})}
									</div>
								</div>
							)}
						</>
					)}
				</div>
			</main>
		</div>
	);
}

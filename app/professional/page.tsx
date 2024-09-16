"use client";
import React from "react";
import { useState, useEffect } from "react";
import FilterBox from "@/components/FilterBox";
import CollectionThumbnail from "@/components/CollectionThumbnail";
import CollectionHeading from "@/components/CollectionHeading";
import PhotoModal from "@/components/PhotoModal";
import { collectionsArray } from "@/collections/collections";
import { collections } from "@/collections/collections";
import { defaultPhoto, PhotoProps } from "@/types";
import { ModalData } from "@/types";
import { Arimo } from "next/font/google";

const arimo = Arimo({ subsets: ["latin"] });

export default function Professional() {
	const [modalData, setModalData] = useState<ModalData>({
		photo: defaultPhoto,
		isOpen: false,
		showLink: false,
	});

	const closeModal = () => {
		setModalData({
			photo: defaultPhoto,
			isOpen: false,
			showLink: false,
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
					<PhotoModal
						modalData={modalData}
						setModalData={setModalData}
						isFiltered={filters.length > 0 ? true : false}
					/>

					{modalData.isOpen ? (
						<div className="fixed inset-0 z-10 bg-black bg-opacity-75" onClick={() => closeModal()}></div>
					) : null}

					{filters.length === 0 ? (
						<div>
							<div className="pb-10" id="halfalive">
								<CollectionHeading
									title="Concert Photography: Half Alive & Tessa Violet"
									details="House of Blues Boston, MA. Spring 2023."
								/>
								<div className="grid grid-cols-3 md:grid-cols-5 grid-auto-rows minmax(150px, auto) mx-3">
									{collections["halfalive"].map((photo: PhotoProps) => (
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
							{collectionsArray.filter((photo: PhotoProps) =>
								filters.every((filter) => photo.tags?.includes(filter))
							).length === 0 ? (
								<div className="flex flex-col p-6 pb-0">
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
								<>
									<CollectionHeading
										title={"Looking for... " + filters.join(" & ")}
										details="Includes photos with the selected combination of tags."
									/>
									<div className="grid grid-cols-2 md:grid-cols-3 mx-3">
										{collectionsArray.map((photo: PhotoProps) => {
											const matchesFilters = filters.every((filter) =>
												photo.tags?.includes(filter)
											);
											if (matchesFilters) {
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
								</>
							)}

							{/* {filters.length > 1 && (
								<>
									<CollectionHeading
										title={"Looking for... " + filters.join(", ")}
										details="Includes photos with any one of the selected tags."
									/>
									<div className="grid grid-cols-2 md:grid-cols-3 mx-3">
										{collectionsArray.map(
											(photo: PhotoProps) =>
												filters.some((filter) => photo.tags?.includes(filter)) && (
													<CollectionThumbnail
														key={photo.imageSrc}
														setModalData={setModalData}
														photo={photo}
														search={true}
													/>
												)
										)}
									</div>
								</>
							)} */}
						</>
					)}
				</div>
			</main>
		</div>
	);
}

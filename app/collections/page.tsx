"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CollectionThumbnail from "@/components/CollectionThumbnail";
import PhotoModal from "@/components/PhotoModal";
import ducksAndLiliesArray from "@/collections/ducksAndLilies";
import perseids2024Array from "@/collections/perseids2024";
import topsailBeachArray from "@/collections/topsailBeach";
import chicagoStreetArray from "@/collections/chicagoStreet";
import halfaliveArray from "@/collections/halfalive";
import montroseMoonriseArray from "@/collections/montroseMoonrise";
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

	const transitionLength = 1;

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

					<div className="pb-10" id="montroseMoonrise">
						<div className="flex flex-col p-6 pb-0">
							<h3 className="text-4xl font-bold text-left ">Montrose Moonrise Vista Point</h3>
							<h2 className="text-2xl font-medium text-left">Chicago, IL. Summer 2023.</h2>
						</div>
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
						<div className="flex flex-col p-6 pb-0">
							<h3 className="text-4xl font-bold text-left ">Half Alive & Tessa Violet</h3>
							<h2 className="text-2xl font-medium text-left">House of Blues Boston, MA. Spring 2023.</h2>
						</div>
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
						<div className="flex flex-col p-6 pb-0">
							<h3 className="text-4xl font-bold text-left ">Ducks & Lilies</h3>
							<h2 className="text-2xl font-medium text-left">Saint Paul, MN. Summer 2024.</h2>
						</div>
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
						<div className="flex flex-col p-6 pb-0">
							<h3 className="text-4xl font-bold text-left ">Topsail Beach</h3>
							<h2 className="text-2xl font-medium text-left">Topsail Island, NC. Summer 2024.</h2>
						</div>
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
						<div className="flex flex-col p-6 pb-0">
							<h3 className="text-4xl font-bold text-left ">Downtown Chicago</h3>
							<h2 className="text-2xl font-medium text-left">Chicago, IL. Summer 2023.</h2>
						</div>
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
						<div className="flex flex-col p-6 pb-0">
							<h3 className="text-4xl font-bold text-left ">Perseids Meteor Shower 2024</h3>
							<h2 className="text-2xl font-medium text-left">MD. Summer 2024.</h2>
						</div>
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
				</div>
			</main>
		</div>
	);
}

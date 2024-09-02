"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CollectionThumbnail from "@/components/CollectionThumbnail";
import PhotoModal from "@/components/PhotoModal";
import { Caveat } from "next/font/google";
import ducksAndLiliesArray from "@/collections/ducksAndLilies";
import perseids2024Array from "@/collections/perseids2024";
import topsailBeachArray from "@/collections/topsailBeach";

const caveat = Caveat({ subsets: ["latin"] });

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
		<div>
			<title>Rida Naeem Photography</title>
			<main className={caveat.className}>
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

					<div className="pb-10" id="ducksandlilies">
						<h3 className="text-xl text-white">Ducks & Lilies</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 mx-6 lg::mx-24">
							{ducksAndLiliesArray.map((photo: CollectionPhotoProps) => (
								<CollectionThumbnail
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
						<h3 className="text-xl text-white">Topsail Beach</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 mx-6 lg::mx-24">
							{topsailBeachArray.map((photo: CollectionPhotoProps) => (
								<CollectionThumbnail
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
						<h3 className="text-xl text-white">Perseids Meteor Shower 2024</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 mx-6 lg::mx-24">
							{perseids2024Array.map((photo: CollectionPhotoProps) => (
								<CollectionThumbnail
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

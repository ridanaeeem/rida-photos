"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CollectionThumbnail from "@/components/CollectionThumbnail";
import PhotoModal from "@/components/PhotoModal";
import { Caveat } from "next/font/google";
import ducksAndLiliesArray from "@/collections/ducksandlilies/ducksAndLilies";

const caveat = Caveat({ subsets: ["latin"] });

interface ModalData {
	isOpen: boolean;
	imageSrc: string;
	imageAlt: string;
	description: string;
	collection: string;
	stats: string;
}

export default function Home() {
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
							{ducksAndLiliesArray.map((photo) => (
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

					<div className="pb-10">
						<h3 className="text-xl text-white">TSB</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 mx-6 lg::mx-24">
							<CollectionThumbnail
								setModalData={setModalData}
								src="/starryTSB2.JPG"
								alt="water lily"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/starryTSB.JPG"
								alt="water lily"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/starryTSB3.JPG"
								alt="water lily"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/starryTSB4.JPG"
								alt="water lily"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/nightTSB.jpg"
								alt="water lily"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/beach.JPG"
								alt="water lily"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/beach2.JPG"
								alt="water lily"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
								classAdjustments="col-span-1 row-span-1"
							/>
						</div>
					</div>

					<div className="pb-10">
						<h3 className="text-xl text-white">Perseids Meteor Shower 2024</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 mx-6 lg::mx-24">
							<CollectionThumbnail
								setModalData={setModalData}
								src="/perseid.JPG"
								alt="water lily"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/perseid2.jpg"
								alt="water lily"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/perseid3.jpg"
								alt="water lily"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
								classAdjustments="col-span-2 md:col-span-1 row-span-1"
							/>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

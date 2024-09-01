"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PhotoThumbnail from "@/components/PhotoThumbnail";
import PhotoModal from "@/components/PhotoModal";

interface ModalData {
	isOpen: boolean;
	imageSrc: string;
	imageAlt: string;
	description: string;
	camera: string;
	stats: string;
}

export default function Home() {
	const [modalData, setModalData] = useState<ModalData>({
		isOpen: false,
		imageSrc: "",
		imageAlt: "",
		description: "",
		camera: "",
		stats: "",
	});

	const closeModal = () => {
		setModalData({
			isOpen: false,
			imageSrc: "",
			imageAlt: "",
			description: "",
			camera: "",
			stats: "",
		});
	};

	const transitionLength = 1;

	return (
		<div>
			<title>Rida Naeem Photography</title>
			<main>
				<div className="header flex flex-col p-5">
					<h1 className="text-4xl">Rida Naeem Photography</h1>
					<h2 className="text-2xl">Memories</h2>
				</div>

				<PhotoModal
					isOpen={modalData.isOpen}
					imageSrc={modalData.imageSrc}
					imageAlt={modalData.imageAlt}
					description={modalData.description}
				/>

				{modalData.isOpen ? (
					<div className="fixed inset-0 z-10 bg-black bg-opacity-75" onClick={() => closeModal()}></div>
				) : null}

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						duration: transitionLength,
					}}>
					<div className="grid grid-cols-3 gap-4 p-5 lg:grid-cols-6">
						<div className="col-start-2 col-span-2 lg:col-start-4">
							<PhotoThumbnail
								setModalData={setModalData}
								src="/waterLily.JPG"
								alt="water lily"
								description="water lily"
								camera="SONY DSC-RX100M6"
								stats="f/11.0 • 1/4000 • 16.21mm • ISO12800"
							/>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						duration: transitionLength,
					}}>
					<div className="grid grid-cols-4 grid-rows-3 gap-4 px-5">
						<div className="col-span-2 row-start-1 row-span-2">
							<PhotoThumbnail
								setModalData={setModalData}
								src="/fireworks.JPG"
								alt="fireworks"
								description="fireworks"
								camera="SONY DSC-RX100M6"
								stats="f/11.0 • 1/4000 • 16.21mm • ISO12800"
							/>
						</div>
						<div className="col-span-2 row-start-2 row-span-2">
							<PhotoThumbnail
								setModalData={setModalData}
								src="/chicagoEyes.JPG"
								alt="Chicago Eyes"
								description="Chicago Eyes"
								camera="SONY DSC-RX100M6"
								stats="f/11.0 • 1/4000 • 16.21mm • ISO12800"
							/>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						duration: transitionLength,
					}}
					className="p-5">
					<PhotoThumbnail
						setModalData={setModalData}
						src="/haSunset.JPG"
						alt="Sunset"
						description="Sunset"
						camera="SONY DSC-RX100M6"
						stats="f/11.0 • 1/4000 • 16.21mm • ISO12800"
					/>
				</motion.div>
			</main>
		</div>
	);
}

/* Rida Naeem */

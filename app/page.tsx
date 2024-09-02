"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PhotoThumbnail from "@/components/PhotoThumbnail";
import PhotoModal from "@/components/PhotoModal";
import { Caveat } from "next/font/google";

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
				<div className="bg-gradient-to-b from-white to-[#9EB8CF]">
					{/* <div className="flex flex-col p-2 md:p-5">
						<h2 className="text-2xl">Memories</h2>
					</div> */}

					<div className="inset-0 flex justify-center">
						<PhotoModal
							isOpen={modalData.isOpen}
							imageSrc={modalData.imageSrc}
							imageAlt={modalData.imageAlt}
							description={modalData.description}
							collection={modalData.collection}
							stats={modalData.stats}
						/>
					</div>

					{modalData.isOpen ? (
						<div className="fixed inset-0 z-10 bg-black bg-opacity-75" onClick={() => closeModal()}></div>
					) : null}

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							duration: transitionLength,
						}}>
						<div className="grid grid-cols-3 gap-4 p-2 md:p-5 lg:grid-cols-3">
							<div className="col-start-2 col-span-2 row-span-3 lg:col-start-2">
								<PhotoThumbnail
									setModalData={setModalData}
									src="/waterLily.JPG"
									alt="white water lily"
									description="water lily"
									collection="#ducksandlilies"
									stats="SONY DSC-RX100M6 • f/6.3 • 1/2000 • 63.55mm • ISO3200"
								/>
							</div>
						</div>
					</motion.div>
				</div>
				<div className="bg-gradient-to-b from-[#9EB8CF] to-[#9EB8CF]">
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
									collection=""
									stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
								/>
							</div>
							<div className="col-span-2 row-start-2 row-span-2">
								<PhotoThumbnail
									setModalData={setModalData}
									src="/chicagoEyes.JPG"
									alt="Chicago Eyes"
									description="Chicago Eyes"
									collection=""
									stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
								/>
							</div>
						</div>
					</motion.div>
				</div>
				<div className="bg-gradient-to-b from-[#9EB8CF] to-[#9EB8CF]">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							duration: transitionLength,
						}}
						className="p-2 md:p-5">
						<PhotoThumbnail
							setModalData={setModalData}
							src="/haSunset.JPG"
							alt="Sunset"
							description="Sunset"
							collection=""
							stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
						/>
					</motion.div>
				</div>

				<div className="bg-gradient-to-b from-[#9EB8CF] to-[#1C1E1B]">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							duration: transitionLength,
						}}
						className="grid grid-cols-4 lg:grid-cols-6 gap-4 px-5">
						<div className="col-start-2 col-span-2">
							<PhotoThumbnail
								setModalData={setModalData}
								src="/chiLh.JPG"
								alt="chicago lighthouse"
								description="chicago lighthouse"
								collection=""
								stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							duration: transitionLength,
						}}
						className="p-2 md:p-5 grid grid-cols-6 grid-rows-2 gap-4 px-5">
						<div className="col-span-4 col-start-3 row-span-2">
							<PhotoThumbnail
								setModalData={setModalData}
								src="/starryTSB.JPG"
								alt="night sky"
								description="night sky"
								collection=""
								stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
							/>
						</div>
						<div className="col-span-2 row-start-2 pt-8">
							<PhotoThumbnail
								setModalData={setModalData}
								src="/rb.JPG"
								alt="rab"
								description="rab"
								collection=""
								stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							duration: transitionLength,
						}}
						className="grid grid-cols-4 grid-rows-1 gap-4 px-5">
						<div className="col-span-2 row-span-2">
							<PhotoThumbnail
								setModalData={setModalData}
								src="/koi.JPG"
								alt="koi"
								description="koi"
								collection=""
								stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
							/>
						</div>
						<div className="col-span-2 px-2 pt-2 md:px-5 md:pt-2 lg:px-12 lg:pt-6">
							<PhotoThumbnail
								setModalData={setModalData}
								src="/flower.JPG"
								alt="flower"
								description="flower"
								collection=""
								stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							duration: transitionLength,
						}}
						className="p-2 md:p-5 grid grid-cols-3 gap-4 md:px-5">
						<div className="col-start-2 col-span-2">
							<PhotoThumbnail
								setModalData={setModalData}
								src="/duckTri.JPG"
								alt="duck"
								description="duck"
								collection="#ducksandlilies"
								stats="SONY DSC-RX100M6 • f/4.5 • 1/16000 • 72.00mm • ISO3200"
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							duration: transitionLength,
						}}
						className="grid grid-cols-8 md:grid-cols-4 gap-4 md:px-5">
						<div className="col-span-5 md:col-start-3 md:col-span-2 pr-10">
							<PhotoThumbnail
								setModalData={setModalData}
								src="/protest.JPG"
								alt="protest"
								description="protest"
								collection=""
								stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
							/>
						</div>
						<div className="col-span-3 md:col-span-2 row-start-1 pt-20 md:px-40 md:pt-24">
							<PhotoThumbnail
								setModalData={setModalData}
								src="/bernini.jpg"
								alt="bernini"
								description="bernini"
								collection=""
								stats="SONY DSC-RX100M6 • f/11.0 • 1/4000 • 16.21mm • ISO12800"
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							duration: transitionLength,
						}}
						className="p-2 md:p-5 grid grid-cols-3 gap-4 md:px-5">
						<div className="col-start-2 col-span-2">
							<PhotoThumbnail
								setModalData={setModalData}
								src="/waterLily2.JPG"
								alt="two white water lilies"
								description="water lily"
								collection="#ducksandlilies"
								stats="SONY DSC-RX100M6 • f/4.5 • 1/25600 • 72.00mm • ISO5000"
							/>
						</div>
					</motion.div>
				</div>
			</main>
		</div>
	);
}

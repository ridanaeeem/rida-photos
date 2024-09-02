"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CollectionThumbnail from "@/components/CollectionThumbnail";
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
							<CollectionThumbnail
								setModalData={setModalData}
								src="/waterLily.JPG"
								alt="white water lily"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/6.3 • 1/2000 • 63.55mm • ISO3200"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/waterLily2.JPG"
								alt="two white water lilies"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/4.5 • 1/25600 • 72.00mm • ISO5000"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/duck.JPG"
								alt="baby duck swimming in water"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/4.6 • 1/16000 • 71.25mm • ISO3200"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/duck2.JPG"
								alt="baby duck swimming in water"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/4.5 • 1/16000 • 72.00mm • ISO3200"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/waterLily3.JPG"
								alt="four purple water lilies"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/4.0 • 1/20000 • 34.64mm • ISO5000"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/waterLily6.JPG"
								alt="one bright pink water lily"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/4.5 • 1/20000 • 50.65mm • ISO5000"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/waterLily4.JPG"
								alt="one pink water lily"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/4.5 • 1/20000 • 72.00mm • ISO5000"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/waterLily5.JPG"
								alt="three pink water lilies"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/4.5 • 1/20000 • 50.65mm • ISO5000"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/waterLily9.JPG"
								alt="one pink water lily"
								description="one pink water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/4.0 • 1/16000 • 33.98mm • ISO3200"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/waterLily10.JPG"
								alt="one pink water lily, blooming"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/4.0 • 1/16000 • 33.98mm • ISO3200"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/duck3.JPG"
								alt="baby duck moving around in water"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/4.5 • 1/16000 • 72.00mm • ISO3200"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/duck4.JPG"
								alt="baby duck looking at lilypads in water"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/4.5 • 1/16000 • 40.37mm • ISO3200"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/waterLily12.JPG"
								alt="one white water lily with pink tips"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/4.5 • 1/5000 • 69.49mm • ISO3200"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/duckTri.JPG"
								alt="baby duck swimming in water"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/4.5 • 1/16000 • 72.00mm • ISO3200"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/waterLily7.JPG"
								alt="three magenta water lilies"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/8.0 • 1/8000 • 30.26mm • ISO5000"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/waterLily8.JPG"
								alt="two pink water lilies"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/5.0 • 1/8000 • 65.97mm • ISO5000"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/waterLily13.JPG"
								alt="two white water lilies"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/8.0 • 1/1250 • 34.64mm • ISO3200"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/waterLily14.JPG"
								alt="two white water lilies, up close"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/8.0 • 1/1250 • 71.03mm • ISO3200"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/duck5.JPG"
								alt="baby duck swimming across water"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/5.0 • 1/16000 • 72.00mm • ISO3200"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/duck6.jpg"
								alt="duck swimming in water, looking forwards"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/4.5 • 1/16000 • 72.00mm • ISO3200"
								classAdjustments="col-span-1 row-span-1"
							/>
							<CollectionThumbnail
								setModalData={setModalData}
								src="/duck7.JPG"
								alt="duck standing in water"
								description="water lily"
								collection=""
								stats="SONY DSC-RX100M6 • f/4.5 • 1/16000 • 72.00mm • ISO3200"
								classAdjustments="col-span-2 md:col-span-1 row-span-1"
							/>
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

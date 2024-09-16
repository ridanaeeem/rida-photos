"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PhotoThumbnail from "@/components/PhotoThumbnail";
import PhotoModal from "@/components/PhotoModal";
import { ModalData, defaultPhoto } from "@/types";
import mainPageArray from "@/collections/mainPage";

export default function Home() {
	const [modalData, setModalData] = useState<ModalData>({
		photo: defaultPhoto,
		isOpen: false,
		showLink: false,
	});

	for (let i = 0; i < mainPageArray.length; i++) {
		mainPageArray[i].index = i;
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
					let newIndex = (prevModalData.photo.index - 1 + mainPageArray.length) % mainPageArray.length;

					return {
						...prevModalData,
						photo: mainPageArray[newIndex],
						isOpen: true,
					};
				});
			}
		};
		const handleRight = (event: KeyboardEvent) => {
			if (event.key === "ArrowRight") {
				setModalData((prevModalData) => {
					let newIndex = (prevModalData.photo.index + 1) % mainPageArray.length;

					return {
						...prevModalData,
						photo: mainPageArray[newIndex],
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

	const transitionLength = 1;

	return (
		<div>
			<title>Rida Naeem Photography</title>
			<main>
				<div className="bg-gradient-to-b from-white to-[#9EB8CF]">
					{/* <div className="flex flex-col p-2 md:p-5">
						<h2 className="text-2xl">Memories</h2>
					</div> */}

					<div className="inset-0 flex justify-center">
						<PhotoModal
							modalData={modalData}
							setModalData={setModalData}
							isFiltered={false}
							pageArray={mainPageArray}
						/>
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: transitionLength,
						}}>
						<div className="grid grid-cols-3 gap-4 p-2 md:p-5 lg:grid-cols-3">
							<div className="col-start-2 col-span-2 row-span-3 lg:col-start-2">
								<PhotoThumbnail photo={mainPageArray[0]} setModalData={setModalData} />
							</div>
						</div>
					</motion.div>
				</div>
				<div className="bg-gradient-to-b from-[#9EB8CF] to-[#9EB8CF]">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: transitionLength,
						}}>
						<div className="grid grid-cols-4 grid-rows-3 gap-4 px-5">
							<div className="col-span-2 row-start-1 row-span-2">
								<PhotoThumbnail photo={mainPageArray[1]} setModalData={setModalData} />
							</div>
							<div className="col-span-2 row-start-2 row-span-2">
								<PhotoThumbnail photo={mainPageArray[2]} setModalData={setModalData} />
							</div>
						</div>
					</motion.div>
				</div>
				<div className="bg-gradient-to-b from-[#9EB8CF] to-[#9EB8CF]">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: transitionLength,
						}}
						className="p-2 md:p-5">
						<PhotoThumbnail photo={mainPageArray[3]} setModalData={setModalData} />
					</motion.div>
				</div>

				<div className="bg-gradient-to-b from-[#9EB8CF] to-[#1C1E1B]">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: transitionLength,
						}}
						className="grid grid-cols-4 lg:grid-cols-6 gap-4 px-5">
						<div className="col-start-2 col-span-2">
							<PhotoThumbnail photo={mainPageArray[4]} setModalData={setModalData} />
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: transitionLength,
						}}
						className="p-2 md:p-5 grid grid-cols-6 grid-rows-2 gap-4 px-5">
						<div className="col-span-4 col-start-3 row-span-2">
							<PhotoThumbnail photo={mainPageArray[5]} setModalData={setModalData} />
						</div>
						<div className="col-span-2 row-start-2 pt-8">
							<PhotoThumbnail photo={mainPageArray[6]} setModalData={setModalData} />
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: transitionLength,
						}}
						className="grid grid-cols-4 grid-rows-1 gap-4 px-5">
						<div className="col-span-2 row-span-2">
							<PhotoThumbnail photo={mainPageArray[7]} setModalData={setModalData} />
						</div>
						<div className="col-span-2 px-2 pt-2 md:px-5 md:pt-2 lg:px-12 lg:pt-6">
							<PhotoThumbnail photo={mainPageArray[8]} setModalData={setModalData} />
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: transitionLength,
						}}
						className="p-2 md:p-5 grid grid-cols-3 gap-4 md:px-5">
						<div className="col-start-2 col-span-2">
							<PhotoThumbnail photo={mainPageArray[9]} setModalData={setModalData} />
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: transitionLength,
						}}
						className="grid grid-cols-8 md:grid-cols-4 gap-4 md:px-5">
						<div className="col-span-5 md:col-start-3 md:col-span-2 pr-10">
							<PhotoThumbnail photo={mainPageArray[10]} setModalData={setModalData} />
						</div>
						<div className="col-span-3 md:col-span-2 row-start-1 pt-20 md:px-40 md:pt-24">
							<PhotoThumbnail photo={mainPageArray[11]} setModalData={setModalData} />
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: transitionLength,
						}}
						className="p-2 md:p-5 grid grid-cols-3 gap-4 md:px-5">
						<div className="col-start-2 col-span-2">
							<PhotoThumbnail photo={mainPageArray[12]} setModalData={setModalData} />
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: transitionLength,
						}}
						className="grid grid-cols-4 md:grid-cols-7 gap-4 md:px-5">
						<div className="col-start-2 col-span-2">
							<PhotoThumbnail photo={mainPageArray[13]} setModalData={setModalData} />
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: transitionLength,
						}}
						className="p-2 md:p-5 grid grid-cols-3 md:grid-cols-5 gap-4 md:px-5">
						<div className="col-start-1 col-span-2">
							<PhotoThumbnail photo={mainPageArray[14]} setModalData={setModalData} />
						</div>
					</motion.div>
				</div>
			</main>
		</div>
	);
}

"use client";
import React from "react";
import { useEffect, useState } from "react";
import { ModalData, PhotoProps, defaultPhoto } from "@/types";
import connectArray from "@/collections/connect";
import PhotoModal from "@/components/PhotoModal";
import CollectionThumbnail from "@/components/CollectionThumbnail";

export default function Contact() {
	const [modalData, setModalData] = useState<ModalData>({
		photo: defaultPhoto,
		isOpen: false,
		showLink: false,
	});

	for (let i = 0; i < connectArray.length; i++) {
		connectArray[i].index = i;
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
					let newIndex = (prevModalData.photo.index - 1 + connectArray.length) % connectArray.length;
					return {
						...prevModalData,
						photo: connectArray[newIndex],
						isOpen: true,
					};
				});
			}
		};
		const handleRight = (event: KeyboardEvent) => {
			if (event.key === "ArrowRight") {
				setModalData((prevModalData) => {
					let newIndex = (prevModalData.photo.index + 1) % connectArray.length;
					return {
						...prevModalData,
						photo: connectArray[newIndex],
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

	return (
		<div>
			<title>Contact</title>
			<main>
				<div className="bg-gradient-to-b from-[#171719] to-[#171719] text-white">
					<PhotoModal
						modalData={modalData}
						setModalData={setModalData}
						isFiltered={false}
						pageArray={connectArray}
					/>
					<h1 className="text-2xl md:text-4xl text-left font-bold p-6 pb-1">Get in Touch</h1>
					<p className="text-lg md:text-2xl text-left px-6 pb-6">
						Email:{" "}
						<a href="mailto:ridan@bu.edu" className="text-[#809BD8]">
							ridan@bu.edu
						</a>
						<br></br>
						Instagram{" "}
						<a href="https://www.instagram.com/ridasphotos/" className="text-[#809BD8]">
							@ridasphotos
						</a>
					</p>
					<h1 className="text-2xl md:text-4xl text-left font-bold p-6 pb-1">About Me</h1>
					<p className="text-lg md:text-2xl text-left px-6 pb-1">
						Hi! My name is Rida, and I recently graduated from Boston University where I studied
						Neuroscience and Computer Science. If you want to learn more about my work in those fields,
						check out{" "}
						<a href="https://rnaeem.com" target="_blank" className="text-[#809BD8]">
							my portfolio
						</a>
						! Otherwise feel free to explore my photography here.{" "}
					</p>
					<div className="grid grid-cols-2 md:grid-cols-4 mx-1 my-3 md:mx-3">
						{connectArray.slice(0, 4).map((photo: PhotoProps) => (
							<CollectionThumbnail key={photo.imageSrc} photo={photo} setModalData={setModalData} />
						))}
					</div>
					<p className="text-lg md:text-2xl text-left px-6">
						I have been taking photos ever since I was a little kid and had a{" "}
						<a
							href="https://www.amazon.com/VTech-Kidizoom-Camera-2010-Version/dp/B0027CS7D6"
							target="_blank"
							className="text-[#809BD8]">
							VTech Kidizoom Camera
						</a>
						. These days I tend to use a Sony RX100M6 and FujiFilm X100F, but this camera will forever be
						important to me. Take a look at some of my first ever photos below! My photos mostly capture
						moments in my life that I want to preserve, and I hope that viewing them conveys the same
						emotions I felt when taking them.
					</p>
					<div className="grid grid-cols-2 md:grid-cols-4 mx-1 my-3 md:mx-3">
						{connectArray.slice(4).map((photo: PhotoProps) => (
							<CollectionThumbnail key={photo.imageSrc} photo={photo} setModalData={setModalData} />
						))}
					</div>
					<p className="text-lg md:text-2xl text-left px-6 pb-6">
						{" "}
						Take a look on the{" "}
						<a href="/" className="text-[#809BD8]">
							main page
						</a>{" "}
						to scroll through some of my favorite photos, and make sure to check out the{" "}
						<a href="/personal" className="text-[#809BD8]">
							personal page
						</a>{" "}
						to see my personal photography and the{" "}
						<a href="/professional" className="text-[#809BD8]">
							professional page
						</a>{" "}
						to see my growing professional portfolio. Enjoy!
					</p>
				</div>
			</main>
		</div>
	);
}

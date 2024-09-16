import React from "react";
import { Darker_Grotesque } from "next/font/google";
import { ModalData, PhotoProps } from "@/types";
import Link from "next/link";
import mainPageArray from "@/collections/mainPage";
import { personalArray, professionalArray } from "@/collections/collections";

const darker_grotesque = Darker_Grotesque({ subsets: ["latin"] });

export default function PhotoModal({
	modalData,
	setModalData,
	isFiltered,
	pageArray,
}: {
	modalData: ModalData;
	setModalData: any;
	isFiltered: boolean;
	pageArray: PhotoProps[];
}) {
	if (!modalData.isOpen) return null;

	let path = "";
	if (pageArray === personalArray || pageArray === mainPageArray) path = "personal";
	else if (pageArray === professionalArray) path = "professional";

	return (
		<div
			className={`${
				darker_grotesque.className
			} ${"fixed lg:inset-0 z-50 flex flex-col items-center justify-center m-5 lg:m-[20rem] text-center font-normal"}`}>
			<div
				className="fixed inset-0 bg-black bg-opacity-85"
				onClick={() => setModalData({ ...modalData, isOpen: false })}
			/>
			<div className="relative bg-white p-3 md:p-5 rounded-lg text-[#171719] flex flex-center flex-col flex-wrap break-words">
				<img
					src={modalData.photo.imageSrc}
					alt={modalData.photo.imageAlt}
					className="w-auto max-w-screen max-h-[75vh] mb-4 object-contain"
				/>
				<p className="text-2xl">
					{/* {description + ": "} */}
					{modalData.showLink && modalData.photo.collection !== "" ? (
						<Link
							href={`${path}#${modalData.photo.collection}`}
							target="_blank"
							rel="noreferrer"
							className="hover:text-[#809BB3]">
							View Collection
						</Link>
					) : null}
				</p>
				<p className="text-md md:text-3xl flex-wrap break-words object-contain">{modalData.photo.stats}</p>
				<p>{modalData.photo.index + 1}</p>
				<p>{modalData.photo.filtered}</p>
			</div>
			<div className="flex text-4xl justify-between m-2 text-white z-10">
				<button
					className="px-6"
					onClick={() => {
						setModalData((prevModalData: ModalData) => {
							let newIndex = (prevModalData.photo.index - 1 + pageArray.length) % pageArray.length;

							if (isFiltered) {
								while (pageArray[newIndex].filtered === false) {
									newIndex = (newIndex - 1 + pageArray.length) % pageArray.length;
								}
							}

							return {
								...prevModalData,
								photo: pageArray[newIndex],
								isOpen: true,
							};
						});
					}}>
					&larr;
				</button>
				<button
					className="px-6"
					onClick={() => {
						setModalData((prevModalData: ModalData) => {
							let newIndex = (prevModalData.photo.index + 1) % pageArray.length;
							if (isFiltered) {
								while (pageArray[newIndex].filtered === false) {
									newIndex = (newIndex + 1) % pageArray.length;
								}
							}

							return {
								...prevModalData,
								photo: pageArray[newIndex],
								isOpen: true,
							};
						});
					}}>
					&rarr;
				</button>
			</div>
		</div>
	);
}

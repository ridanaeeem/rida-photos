import React from "react";
import { Darker_Grotesque } from "next/font/google";
import { ModalData, PhotoProps } from "@/types";
import { personalArray, collections } from "@/collections/collections";
import mainPageArray from "@/collections/mainPage";
import Link from "next/link";

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
	pageArray?: string;
}) {
	if (!modalData.isOpen) return null;

	return (
		<div
			className={`${
				darker_grotesque.className
			} ${"fixed lg:inset-0 z-50 flex flex-col items-center justify-center m-5 lg:m-[20rem] text-center font-normal"}`}>
			<div className="relative bg-white p-3 md:p-5 rounded-lg text-[#171719]">
				<img src={modalData.photo.imageSrc} alt={modalData.photo.imageAlt} className="w-auto h-auto mb-4" />
				<p className="text-2xl">
					{/* {description + ": "} */}
					{modalData.showLink && modalData.photo.collection !== "" ? (
						<Link
							href={`personal#${modalData.photo.collection}`}
							target="_blank"
							rel="noreferrer"
							className="hover:text-[#809BB3]">
							View Collection
						</Link>
					) : null}
				</p>
				<p className="text-md md:text-3xl">{modalData.photo.stats}</p>
				{/* <p>{modalData.photo.index + 1}</p> */}
				<p>{modalData.photo.filtered}</p>
			</div>
			<div className="flex text-4xl justify-between m-2">
				{pageArray === "mainPageArray" ? (
					<></>
				) : (
					<>
						<button
							className="px-6"
							onClick={() => {
								setModalData((prevModalData: ModalData) => {
									let newIndex =
										(prevModalData.photo.index - 1 + personalArray.length) % personalArray.length;

									if (isFiltered) {
										while (personalArray[newIndex].filtered === false) {
											newIndex = (newIndex - 1 + personalArray.length) % personalArray.length;
										}
									}

									return {
										...prevModalData,
										photo: personalArray[newIndex],
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
									let newIndex = (prevModalData.photo.index + 1) % personalArray.length;
									if (isFiltered) {
										while (personalArray[newIndex].filtered === false) {
											newIndex = (newIndex + 1) % personalArray.length;
										}
									}

									return {
										...prevModalData,
										photo: personalArray[newIndex],
										isOpen: true,
									};
								});
							}}>
							&rarr;
						</button>
					</>
				)}
			</div>
		</div>
	);
}

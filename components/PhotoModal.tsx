import React from "react";
import { Darker_Grotesque } from "next/font/google";
import { ModalData } from "@/types";
import { collectionsArray } from "@/collections/collections";

const darker_grotesque = Darker_Grotesque({ subsets: ["latin"] });

export default function PhotoModal({
	modalData,
	collection,
	setModalData,
}: {
	modalData: ModalData;
	collection: string;
	setModalData: any;
}) {
	if (!modalData.isOpen) return null;

	return (
		<div
			className={`${
				darker_grotesque.className
			} ${"fixed lg:inset-0 z-50 flex flex-col items-center justify-center m-5 lg:m-[20rem] text-center font-normal"}`}>
			<div className="relative bg-white p-3 md:p-5 rounded-lg text-[#171719]">
				<img src={modalData.imageSrc} alt={modalData.imageAlt} className="w-auto h-auto mb-4" />
				<p className="text-2xl">
					{/* {description + ": "} */}
					{modalData.showLink && modalData.collection !== "" ? (
						<a
							href={"/collections#" + modalData.collection}
							target="_blank"
							rel="noreferrer"
							className="hover:text-[#809BB3]">
							View Collection
						</a>
					) : null}
				</p>
				<p className="text-md md:text-3xl">{modalData.stats}</p>
				<p>{modalData.index}</p>
			</div>
			<div className="flex text-4xl justify-between m-2">
				<button
					className="px-6"
					onClick={() =>
						setModalData({
							isOpen: true,
							imageSrc: collectionsArray[(modalData.index - 1 + collectionsArray.length) % collectionsArray.length].imageSrc,
							imageAlt: collectionsArray[(modalData.index - 1 + collectionsArray.length) % collectionsArray.length].imageAlt,
							description: collectionsArray[(modalData.index - 1 + collectionsArray.length) % collectionsArray.length].description,
							collection: collectionsArray[(modalData.index - 1 + collectionsArray.length) % collectionsArray.length].collection,
							stats: collectionsArray[(modalData.index - 1 + collectionsArray.length) % collectionsArray.length].stats,
							index: (modalData.index - 1 + collectionsArray.length) % collectionsArray.length,
						})
					}>
					&larr;
				</button>
				<button
					className="px-6"
					onClick={() =>
						setModalData({
							isOpen: true,
							imageSrc: collectionsArray[(modalData.index + 1) % collectionsArray.length].imageSrc,
							imageAlt: collectionsArray[(modalData.index + 1) % collectionsArray.length].imageAlt,
							description: collectionsArray[(modalData.index + 1) % collectionsArray.length].description,
							collection: collectionsArray[(modalData.index + 1) % collectionsArray.length].collection,
							stats: collectionsArray[(modalData.index + 1) % collectionsArray.length].stats,
							index: (modalData.index + 1) % collectionsArray.length,
						})
					}>
					&rarr;
				</button>
			</div>
		</div>
	);
}

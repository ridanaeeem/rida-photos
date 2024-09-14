import React from "react";
import { Darker_Grotesque } from "next/font/google";
import { ModalData } from "@/types";

const darker_grotesque = Darker_Grotesque({ subsets: ["latin"] });

export default function PhotoModal({ modalData, collection }: { modalData: ModalData; collection: string }) {
	if (!modalData.isOpen) return null;

	return (
		<div
			className={`${
				darker_grotesque.className
			} ${"fixed lg:inset-0 z-50 flex items-center justify-center m-5 lg:m-[20rem] text-center font-normal"}`}>
			<div className="relative bg-white p-3 md:p-5 rounded-lg text-[#171719]">
				<img src={modalData.imageSrc} alt={modalData.imageAlt} className="w-auto h-auto mb-4" />
				<p className="text-2xl">
					{/* {description + ": "} */}
					{modalData.showLink && modalData.collection !== "" ? (
						<a
							href={"/personal#" + modalData.collection}
							target="_blank"
							rel="noreferrer"
							className="hover:text-[#809BB3]">
							View Collection
						</a>
					) : null}
				</p>
				<p className="text-md md:text-3xl">{modalData.stats}</p>
			</div>
		</div>
	);
}

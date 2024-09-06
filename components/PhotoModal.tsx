import React from "react";
import { Darker_Grotesque } from "next/font/google";

const darker_grotesque = Darker_Grotesque({ subsets: ["latin"] });

interface PhotoModalProps {
	isOpen: boolean;
	imageSrc: string;
	imageAlt: string;
	description: string;
	collection: string;
	stats: string;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ isOpen, imageSrc, imageAlt, description, collection, stats }) => {
	if (!isOpen) return null;

	return (
		<div
			className={`${
				darker_grotesque.className
			} ${"fixed lg:inset-0 z-50 flex items-center justify-center m-5 lg:m-[20rem] text-center font-normal"}`}>
			<div className="relative bg-white p-3 md:p-5 rounded-lg text-[#171719]">
				<img src={imageSrc} alt={imageAlt} className="w-auto h-auto mb-4" />
				<p className="text-2xl">
					{/* {description + ": "} */}
					{collection != "" ? (
						<a
							href={"/collections#" + collection}
							target="_blank"
							rel="noreferrer"
							className="hover:text-[#809BB3]">
							View Collection
						</a>
					) : null}
				</p>
				<p className="text-md md:text-3xl">{stats}</p>
			</div>
		</div>
	);
};

export default PhotoModal;

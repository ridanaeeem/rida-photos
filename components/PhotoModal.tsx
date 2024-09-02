import React from "react";

interface PhotoModalProps {
	isOpen: boolean;
	// onClose: () => void;
	imageSrc: string;
	imageAlt: string;
	description: string;
	camera: string;
	stats: string;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ isOpen, imageSrc, imageAlt, description, camera, stats }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed lg:inset-0 z-50 flex items-center justify-center m-5 lg:m-60 text-center">
			<div className="relative bg-white p-3 md:p-5 rounded-lg">
				{/* <button
					className="absolute p-2 top-2 right-1 text-2xl text-gray-500 hover:text-gray-800"
					onClick={onClose}>
					&times;
				</button> */}
				<img src={imageSrc} alt={imageAlt} className="w-auto h-auto mb-4" />
				<p className="text-lg">{description}</p>
				<p className="text-sm md:text-lg">
					{camera} • {stats}
				</p>
			</div>
		</div>
	);
};

export default PhotoModal;

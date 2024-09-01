import React from "react";

interface PhotoModalProps {
	isOpen: boolean;
	// onClose: () => void;
	imageSrc: string;
	imageAlt: string;
	description: string;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ isOpen, imageSrc, imageAlt, description }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 m-60 flex items-center justify-center">
			<div className="relative bg-white p-5 rounded-lg">
				{/* <button
					className="absolute p-2 top-2 right-1 text-2xl text-gray-500 hover:text-gray-800"
					onClick={onClose}>
					&times;
				</button> */}
				<img src={imageSrc} alt={imageAlt} className="w-full h-auto mb-4" />
				<p className="text-lg">{description}</p>
			</div>
		</div>
	);
};

export default PhotoModal;

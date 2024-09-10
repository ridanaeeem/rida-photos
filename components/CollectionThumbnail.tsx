import { motion } from "framer-motion";
import { CollectionPhotoProps } from "@/types";

function openModal(setModalData: any, photo: CollectionPhotoProps, showLink: boolean) {
	setModalData({
		isOpen: true,
		imageSrc: photo.imageSrc,
		imageAlt: photo.imageAlt,
		description: photo.description,
		collection: photo.collection,
		stats: photo.stats,
		showLink: showLink,
	});
}

export default function CollectionThumbnail({
	photo,
	setModalData,
	search,
}: {
	photo: CollectionPhotoProps;
	setModalData: any;
	search?: boolean;
}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{
				duration: 1,
			}}
			className={search ? "" : photo.classAdjustments}>
			<img
				src={photo.imageSrc}
				alt={photo.imageAlt}
				className="cursor-pointer p-2 w-full h-full object-cover"
				onClick={() => openModal(setModalData, photo, search ? search : false)}></img>
		</motion.div>
	);
}

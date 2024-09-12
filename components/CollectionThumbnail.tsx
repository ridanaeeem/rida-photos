import { motion } from "framer-motion";
import { PhotoProps } from "@/types";

function openModal(setModalData: any, photo: PhotoProps, showLink: boolean) {
	setModalData({
		photo: photo,
		isOpen: true,
		showLink: showLink,
	});
}

export default function CollectionThumbnail({
	photo,
	setModalData,
	search,
}: {
	photo: PhotoProps;
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

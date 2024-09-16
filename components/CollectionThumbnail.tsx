import { motion } from "framer-motion";
import { PhotoProps, ModalData } from "@/types";

export default function CollectionThumbnail({
	photo,
	setModalData,
	search,
}: {
	photo: PhotoProps;
	setModalData: React.Dispatch<React.SetStateAction<ModalData>>;
	search?: boolean;
}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{
				duration: 1,
			}}
			className={search ? "" : photo.classAdjustments}>
			<img
				src={photo.imageSrc}
				alt={photo.imageAlt}
				className="cursor-pointer p-2 w-full h-full object-cover"
				onClick={() => setModalData({ photo: photo, isOpen: true, showLink: search ?? false })}></img>
		</motion.div>
	);
}

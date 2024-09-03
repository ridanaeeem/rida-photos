import { motion } from "framer-motion";

function openModal(
	setModalData: any,
	imageSrc: string,
	imageAlt: string,
	description: string,
	camera: string,
	stats: string
) {
	setModalData({
		isOpen: true,
		imageSrc,
		imageAlt,
		description,
		camera,
		stats,
	});
}

export default function CollectionThumbnail({
	setModalData,
	src,
	alt,
	description,
	collection,
	stats,
	classAdjustments,
}: {
	setModalData: any;
	src: string;
	alt: string;
	description: string;
	collection: string;
	stats: string;
	classAdjustments: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{
				duration: 1,
			}}
			className={classAdjustments}>
			<img
				src={src}
				alt={alt}
				className="cursor-pointer p-2 w-full h-full object-cover"
				onClick={() => openModal(setModalData, src, alt, description, collection, stats)}></img>
		</motion.div>
	);
}

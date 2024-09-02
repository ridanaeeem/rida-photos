function openModal(
	setModalData: any,
	imageSrc: string,
	imageAlt: string,
	description: string,
	collection: string,
	stats: string
) {
	setModalData({
		isOpen: true,
		imageSrc,
		imageAlt,
		description,
		collection,
		stats,
	});
	const modalId = imageSrc.slice(0, -4);
	window.history.pushState(null, "", `${modalId}`);
}

export default function PhotoThumbnail({
	setModalData,
	src,
	alt,
	description,
	collection,
	stats,
}: {
	setModalData: any;
	src: string;
	alt: string;
	description: string;
	collection: string;
	stats: string;
}) {
	return (
		<img
			src={src}
			alt={alt}
			className="cursor-pointer"
			onClick={() => openModal(setModalData, src, alt, description, collection, stats)}></img>
	);
}

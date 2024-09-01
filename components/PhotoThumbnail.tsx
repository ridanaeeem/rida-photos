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

export default function PhotoThumbnail({
	setModalData,
	src,
	alt,
	description,
	camera,
	stats,
}: {
	setModalData: any;
	src: string;
	alt: string;
	description: string;
	camera: string;
	stats: string;
}) {
	return (
		<img
			src={src}
			alt={alt}
			className="cursor-pointer"
			onClick={() => openModal(setModalData, src, alt, description, camera, stats)}></img>
	);
}

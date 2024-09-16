import { PhotoProps } from "@/types";

function openModal(setModalData: any, photo: PhotoProps) {
	setModalData({
		photo: photo,
		isOpen: true,
		showLink: true,
	});
}

export default function PhotoThumbnail({ setModalData, photo }: { setModalData: any; photo: PhotoProps }) {
	return (
		<img
			src={photo.imageSrc}
			alt={photo.imageAlt}
			className="cursor-pointer"
			onClick={() => openModal(setModalData, photo)}></img>
	);
}

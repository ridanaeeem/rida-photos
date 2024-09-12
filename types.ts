export type ModalData = {
	photo: PhotoProps;
	isOpen: boolean;
	showLink?: boolean;
};

export type PhotoProps = {
	imageSrc: string;
	imageAlt: string;
	description: string;
	collection: string;
	stats: string;
	classAdjustments: string;
	tags?: string[];
	index: number;
};

export const defaultPhoto: PhotoProps = {
	imageSrc: "",
	imageAlt: "",
	description: "",
	collection: "",
	stats: "",
	classAdjustments: "",
	tags: [],
	index: 0,
};

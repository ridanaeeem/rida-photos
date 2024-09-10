export type ModalData = {
    isOpen: boolean;
	imageSrc: string;
	imageAlt: string;
	description: string;
	collection: string;
	stats: string;
    showLink?: boolean;
};

export interface CollectionPhotoProps {
	imageSrc: string;
	imageAlt: string;
	description: string;
	collection: string;
	stats: string;
	classAdjustments: string;
	tags?: string[];
}
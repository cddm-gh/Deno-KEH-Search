export interface Product {
	keh_manufacturer: string;
	keh_coverage: string;
	discount: string;
	hideGroupPrices: string;
	itemGroupId: string;
	freeShipping: string;
	storeBaseCurrency: string;
	price: string;
	keh_megapixels: string;
	toPrice: string;
	imageUrl: string;
	inStock: string;
	currency: string;
	id: string;
	imageHover: string;
	sku: string;
	basePrice: string;
	keh_product_type: string;
	startPrice: string;
	keh_mount: string;
	keh_photography_type: string[];
	image: string;
	deliveryInfo: string;
	hideAddToCart: string;
	salePrice: string;
	oldPrice: string;
	swatches: {
		swatch: string[];
		lowestPrice: string;
		numberOfAdditionalVariants: string;
	};
	weight: string;
	klevu_category: string;
	totalVariants: string;
	groupPrices: string;
	url: string;
	keh_system: string;
	name: string;
	shortDesc: string;
	category: string;
}

export interface ApiResponse {
	result: Product[];
}

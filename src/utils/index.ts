export const loadImage = (path: string) => {
	return new Promise(resolve => {
		const image = new Image();
		image.src = path;
		image.onload = function () {
			resolve(image);
		};
	});
};

declare type ColorHex = `#${string}`;
declare type Link = `https://${string}`;

declare type IconName = 
	'menu'
	| 'arrowBack'
	| 'arrowLeft'
	| 'arrowRight'
	| 'close'
	| 'remove'
	| 'edit'

export { IconName, ColorHex, Link }
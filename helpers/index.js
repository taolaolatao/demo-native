const pluralCheck = (s) => (s === 1 ? ' ago' : 's ago');

export const timeConverter = (timestamp) => {
	const a = new Date(timestamp * 1000);
	const seconds = Math.floor((new Date() - a) / 1000);
	let i = Math.floor(seconds / 31536000);
	if (i > 1) {
		return `${i} year${pluralCheck(i)}`;
	}
	i = Math.floor(seconds / 2592000);
	if (i > 1) {
		return `${i} month${pluralCheck(i)}`;
	}
	i = Math.floor(seconds / 86400);
	if (i > 1) {
		return `${i} day${pluralCheck(i)}`;
	}
	i = Math.floor(seconds / 3600);
	if (i > 1) {
		return `${i} hour${pluralCheck(i)}`;
	}
	i = Math.floor(seconds / 60);
	if (i > 1) {
		return `${i} minute${pluralCheck(i)}`;
	}
	return `${Math.floor(seconds)} second${pluralCheck(seconds)}`;
};

export type Callback = (...args: any[]) => void;

export const isOdd = (number: number) => {
	return number % 2 !== 0;
};

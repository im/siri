export type Cli = {
	input: Array<any>
	flags: {
		m: string,
		[x: string]: string
	}
}

export  type Props = {
	cli: Cli
};
export type Config = {
	url: any
}


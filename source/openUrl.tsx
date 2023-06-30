import React from 'react';
import {Text} from 'ink';
import { Config, Cli } from './types.js'


export default function OpenUrl(cli:Cli, config:Config) {
	const { input,   } = cli

	const name = input[0]
	const url =  config.url[name]

	return (
		<Text>
			打开,{ name }: <Text color="green">{url}</Text>
		</Text>
	);
}

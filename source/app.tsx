import React from 'react';
import {Text} from 'ink';
import OpenUrl from './openUrl.js';
import { getConfig } from './config.js'
import { Props } from './types.js'

export default function App({cli}: Props) {
	const { input  } = cli
	const config = getConfig()

	if (input.length) {
		return OpenUrl(cli, config)
	}

	return (
		<Text>
			Hello,
		</Text>
	);
}

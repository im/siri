import React from 'react';
import {Text} from 'ink';
import { getConfig } from './config.js'
import { Props } from './types.js'
import OpenUrl from './openUrl.js';
import OpenServe from './openServe.js';
import Push from './push.js';

export default function App({cli}: Props) {
	const { input  } = cli
	const config = getConfig()

	if (input.length && input[0] === 'push') {
		return Push(cli)
	}

	if (input.length && input[0] === 'serve') {
		return OpenServe(cli, config)
	}

	if (input.length) {
		return OpenUrl(cli, config)
	}

	return (
		<Text>
			Hello,
		</Text>
	);
}

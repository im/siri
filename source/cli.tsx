#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
    `
	Usage
	  $ siri

	Options
		--name  Your name

	Examples
	  $ siri demo
	  打开 demo:  https://github.com/im/siri
`,
    {
        importMeta: import.meta,
        flags: {
            name: {
                type: 'string',
            },
        },
    },
);

// render(<App name={cli.flags.name} />);
render(<App cli={cli} />);

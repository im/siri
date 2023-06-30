import React from 'react';
import {  Box } from 'ink';
import { Config, Cli } from './types.js'
// @ts-ignore
import shell from 'shelljs'
// import { Alert, } from '@inkjs/ui';

function formatDate (date?: any) {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }
    return date.toLocaleString('en-GB', options).replace(/[^\d-:]/g, ' ')
}


export default function OpenUrl(cli: Cli) {
    const {  flags } = cli

	const message = formatDate(new Date())
	console.log('flags: ', flags);

	shell.exec('git add .')

	shell.exec(`git commit -m "commit at ${message}"`)

	shell.exec(`git push`)


    return (
        <Box >
        </Box>
    );
}

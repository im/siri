import React from 'react';
import {  Box } from 'ink';
import {  Cli } from './types.js'
// @ts-ignore
import shell from 'shelljs'
import { Alert, } from '@inkjs/ui';

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

	const message = flags.m ? flags.m : formatDate(new Date())

	shell.exec('git add .')
	shell.exec(`git commit -m "commit at ${message}"`)
	shell.exec(`git pull`)
	shell.exec(`git push`)

    return (
        <Box width={60}>
			<Alert variant="success"> message : { message } </Alert>
        </Box>
    );
}

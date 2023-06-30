import React from 'react';
import { Text, Box } from 'ink';
import { Config, Cli } from './types.js'
import { Alert, } from '@inkjs/ui';
import open from 'open'


export default function OpenUrl(cli: Cli, config: Config) {
    const { input, } = cli

    const name = input[0]
    const url = config.url[name] || ''
    if (!url) {
        return (
            <Box width={60}>
                <Alert variant="error"> <Text>请在配置文件<Text color="green"> .sirirc.json </Text> 中添加要打开的地址</Text></Alert>
            </Box>
        );
    }

    open(url)

    return (
        <Box width={60}>
            <Alert variant="success"> 打开 {name}: <Text color="green">{url}</Text></Alert>
        </Box>
    );
}

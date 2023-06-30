import os from 'os'
import path from 'path'
import fs from 'fs-extra'
import { Config } from './types.js'


const configFileName = '.sirirc.json';
const configFileTplName = '.sirirc.template.json'
const userHomeDir = os.homedir();
const configFilePath = path.join(userHomeDir, configFileName);
const configFileTplPath = path.join('./', configFileTplName);

const createConfigFile = ():any => {
	const configData = fs.readFileSync(configFileTplPath, 'utf-8')
	try {
		fs.writeFileSync(configFilePath, configData, 'utf-8')
		return fs.readFileSync(configFilePath, 'utf-8')
	} catch (err) {
		console.log('配置文件初始化失败')
	}
}


export const getConfig = ():Config => {
	let config = ''
	try {
		fs.statSync(configFilePath)
		config = fs.readFileSync(configFilePath, 'utf-8') as string
	} catch (err) {
		config = createConfigFile()
	}
	return JSON.parse(config) as Config
}

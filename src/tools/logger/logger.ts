import logger from 'node-color-log'

export interface ILogger {
	debug(message: string, ...args: any[]): void
	info(message: string, ...args: any[]): void
	warn(message: string, ...args: any[]): void
	error(message: string, ...args: any[]): void
}

type LEVEL = 'debug' | 'info' | 'warn' | 'error' | 'disable' | 'success'

export class Logger {
	constructor(logLevel: LEVEL) {
		logger.setLevel(logLevel)
	}

	success(message: string, ...args: any[]) {
		let str = message + ':'
		for (let i = 0; i < args.length; i++) {
			str += str.replace(`{${i}}`, args[i])
		}
		logger.success(str)
	}
	debug(message: string, ...args: any[]) {
		let str = message + ':'
		for (let i = 0; i < args.length; i++) {
			str += str.replace(`{${i}}`, args[i])
		}
		logger.debug(str)
	}
	info(message: string, ...args: any[]) {
		let str = message + ':'
		for (let i = 0; i < args.length; i++) {
			str += str.replace(`{${i}}`, args[i])
		}
		logger.info(str)
	}
	warn(message: string, ...args: any[]) {
		let str = message + ':'
		for (let i = 0; i < args.length; i++) {
			str += str.replace(`{${i}}`, args[i])
		}
		logger.warn(str)
	}
	error(message: string, ...args: any[]) {
		let str = message + ':'
		for (let i = 0; i < args.length; i++) {
			str += str.replace(`{${i}}`, args[i])
		}
		logger.error(str)
	}
}

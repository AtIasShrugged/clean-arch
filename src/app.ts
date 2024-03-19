import express, { Express } from 'express'
import { Server } from 'http'
import { ILogger } from './tools/logger/logger'

export class App {
	app: Express
	server: Server
	port: number
	logger: ILogger

	constructor(app: Express, server: Server, port: number, logger: ILogger) {
		this.app = app
		this.server = server
		this.port = port
		this.logger = logger
	}

	useMiddleware() {
		this.app.use(express.json())
	}

	useRoutes() {}
}

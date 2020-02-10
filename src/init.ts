import { Client } from './models/Client';
import { ILogger } from './interface/ILogger';
import { IConfig } from './interface/IConfig';
import "reflect-metadata";

const logger: ILogger = console;
const config: IConfig = require('../config.json');

let client: Client = new Client();

client.start(logger, config);
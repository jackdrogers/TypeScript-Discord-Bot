import { Bot } from './models/Bot';
import { ILogger } from './interface/ILogger';

const logger: ILogger = console;
const config = require('../config.json');

new Bot().start(logger, config.token);
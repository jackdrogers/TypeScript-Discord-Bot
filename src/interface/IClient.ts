import { ILogger } from './ILogger';
import { IUser } from './IUser';
import { Command } from '../models/Command';
import { IConfig } from './IConfig';
import * as discord from 'discord.js';

export interface IClient {
    readonly commands: discord.Collection<string, Command>
    readonly logger: ILogger
    readonly allUsers: IUser[]
    readonly onlineUsers: IUser[]
    start(logger: ILogger, config: IConfig): void
}
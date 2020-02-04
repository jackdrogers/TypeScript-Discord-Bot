import { ILogger } from './ILogger';
import { IUser } from './IUser';
import { ICommand } from './ICommand';

export interface IBot {
    readonly commands: ICommand[]
    readonly logger: ILogger
    readonly allUsers: IUser[]
    readonly onlineUsers: IUser[]
    start(logger: ILogger, config: string, commandsPath: string, dataPath: string): void
}
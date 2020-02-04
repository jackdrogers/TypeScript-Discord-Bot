import { IBot } from './IBot';

export interface ICommand {
    init(bot: IBot, dataPath: string): void;
    permissions(): string[];
    process(msg: string): Promise<void>;
}
import { Message } from 'discord.js';
import { Client } from '../models/Client';
import { Permissions } from '../util/Permissions';

export interface ICommand {
    init(client: Client): void;
    permissions(): Permissions[];
    process(message: Message, args: string[], client: Client): Promise<void>;
    getName(): string;
    getAliases(): string[];
}
import { ICommand } from "../interface/ICommand";
import { IClient } from "../interface/IClient";
import { Client } from "./Client";
import { Message } from "discord.js";
import { Permissions } from '../util/Permissions';

export class Command implements ICommand {
    public _bot!: IClient;
    public _message!: Message;

    init(client: Client): void {
        this._bot = client;
    }
    
    public permissions(): Permissions[] {
        return [];
    }

    public async process(message: Message, args: string[], client: Client): Promise<void> {
        this._message = message;
    }

    public getName(): string {
        return '';
    }

    public getAliases(): string[] {
        return [];
    }

    public getDescription(): string {
        return 'No description was found for this command.';
    }
}
import { Client } from "../models/Client";
import * as discord from "discord.js";
import { Command } from "../models/Command";
import { Event } from './Event';

export class MessageEvent extends Event{
    constructor(client: Client) {
        super(client);
    }

    public onMessage(message: discord.Message) {
        let messageArray = message.content.split(' ');
        let args = messageArray.slice(1);
        let command = messageArray[0];

        if (!command.startsWith('!')) return;

        let cmd: Command | undefined = this.client.commands.get(command.slice('!'.length));
        if (cmd) {
            cmd.process(message, args, this.client);
        }
    }
}
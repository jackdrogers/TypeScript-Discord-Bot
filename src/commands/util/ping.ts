import { Command } from "../../models/Command";
import { Message } from "discord.js";
import { Client } from "../../models/Client";

export default class HelpCommand extends Command {
    public getName() {
        return 'ping';
    }

    public getDescription() {
        return 'Sends a ping to the server. Pong!';
    }

    public permissions() {
        return [];
    }

    public async process(message: Message, args: string[], client: Client): Promise<void> {
        message.channel.send("Ping?").then(msg => {
            if(msg instanceof Message) {
                msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms.`);
            }
        });
    }
}
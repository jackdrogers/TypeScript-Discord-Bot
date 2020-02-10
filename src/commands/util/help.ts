import { Command } from "../../models/Command";
import { Message } from "discord.js";
import { Permissions } from '../../util/Permissions';
import { Client } from "../../models/Client";

export default class HelpCommand extends Command {
    public getName() {
        return 'help';
    }

    public permissions() {
        return [];
    }

    public async process(message: Message, args: string[], client: Client): Promise<void> {
        if(!args) return;

        let command = client.commands.get(args[0]);
        if(command) {
            message.channel.send(`**${command.getName()}**: ${command.getDescription()}`);
        }
    }
}
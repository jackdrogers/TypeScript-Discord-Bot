import { Command } from "../../models/Command";
import { Message } from "discord.js";
import { Permissions } from '../../util/Permissions';
import { Client } from "../../models/Client";

export default class HelpCommand extends Command {
    public getName() {
        return 'invite';
    }

    public getDescription() {
        return 'Gives the user a link to invite the bot to their server.'
    }

    public permissions() {
        return [];
    }

    public async process(message: Message, args: string[], client: Client): Promise<void> {
        let invite = await message.client.generateInvite();
        message.channel.send(`<${invite}>`);
    }
}
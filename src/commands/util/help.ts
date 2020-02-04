import { ICommand } from "../../interface/ICommand";
import { IBot } from '../../interface/IBot';
import { Bot } from "../../models/Bot";
import { Command } from "../../models/Command";

export default class HelpCommand extends Command {
    public init(bot: IBot) {
        this._bot = bot;
    }

    public getName() {
        return 'help';
    }

    public permissions() {
        return [];
    }

    public async process(): Promise<void> {
        
    }
}
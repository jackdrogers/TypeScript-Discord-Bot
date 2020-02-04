import { ICommand } from "../interface/ICommand";
import { IBot } from "../interface/IBot";

export class Command implements ICommand {
    public _bot!: IBot;

    init(bot: import("../interface/IBot").IBot, dataPath: string): void {
        throw new Error("Method not implemented.");
    }
    
    public permissions(): string[] {
        return [];
    }

    public async process(msg: string): Promise<void> {
        
    }

    
}
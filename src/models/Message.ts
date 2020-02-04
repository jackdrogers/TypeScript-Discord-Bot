import { IMessage } from "../interface/IMessage";
import { User } from "./User";

export class Message implements IMessage {
    public readonly user: User;

    constructor(user: User) {
        this.user = user;
    }

    setTextOnly(text: string): IMessage {
        throw new Error("Method not implemented.");
    }

    addField(name: string, value: string): IMessage {
        throw new Error("Method not implemented.");
    }

    addBlankField(): IMessage {
        throw new Error("Method not implemented.");
    }

    setColor(color: String): IMessage {
        throw new Error("Method not implemented.");
    }

    setDescription(description: string): IMessage {
        throw new Error("Method not implemented.");
    }

    setFooter(text: string, icon?: string | undefined): IMessage {
        throw new Error("Method not implemented.");
    }

    setImage(url: string): IMessage {
        throw new Error("Method not implemented.");
    }

    setThumbnail(url: string): IMessage {
        throw new Error("Method not implemented.");
    }

    setTitle(title: string): IMessage {
        throw new Error("Method not implemented.");
    }

    setURL(url: string): IMessage {
        throw new Error("Method not implemented.");
    }
}
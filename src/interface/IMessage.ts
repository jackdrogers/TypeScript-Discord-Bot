import { User } from "../models/User";

export interface IMessage {
    readonly user: User
    setTextOnly(text: string): IMessage
    addField(name: string, value: string): IMessage
    addBlankField(): IMessage
    setColor(color: String): IMessage
    setDescription(description: string): IMessage
    setFooter(text: string, icon?: string): IMessage
    setImage(url: string): IMessage
    setThumbnail(url: string): IMessage
    setTitle(title: string): IMessage
    setURL(url: string): IMessage
}
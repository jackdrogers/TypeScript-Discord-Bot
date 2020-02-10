import { Client } from "../models/Client";
import * as discord from "discord.js";
import { Command } from "../models/Command";
import { Event } from './Event';

export class ReadyEvent extends Event {
    constructor(client: Client) {
        super(client);
    }

    public onReady() {
        console.log(this.client.client.user.username + ' is ready');
    }
}
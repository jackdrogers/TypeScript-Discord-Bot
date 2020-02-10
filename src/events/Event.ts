import { Client } from "../models/Client";
import * as discord from "discord.js";
import { Command } from "../models/Command";
import * as init from '../init';


export class Event {
    public client!: Client;

    constructor(client: Client) {
        this.client = client;
    }
}
import * as  discord from 'discord.js';
import * as fs from 'fs';

import { IClient } from '../interface/IClient';
import { ILogger } from '../interface/ILogger';
import { Command } from './Command';
import { IConfig } from '../interface/IConfig';
import { ReadyEvent } from '../events/ReadyEvent';
import { MessageEvent } from '../events/MessageEvent';

export class Client implements IClient {

    private CLIENT!: discord.Client;
    private LOGGER!: ILogger;
    private CONFIG!: IConfig;
    private readonly COMMANDS: discord.Collection<string, Command> = new discord.Collection();

    public get commands(): discord.Collection<string, Command> {
        return this.COMMANDS;
    }

    public get logger() {
        return this.LOGGER;
    }

    public get allUsers() {
        return this.CLIENT ? this.CLIENT.users.array().filter(i => i.id !== '1') : [];
    }

    public get onlineUsers() {
        return this.allUsers.filter(i => i.presence.status !== 'offline');
    }

    public get client() {
        return this.CLIENT;
    }

    public start(logger: ILogger, config: IConfig) {
        this.LOGGER = logger;

        this.CLIENT = new discord.Client();

        this.CONFIG = config;

        this.loadCommands();

        this.CLIENT.login(this.CONFIG.token);

        this.events();
    }

    private isPrefix(prefix: string) {
        return prefix === this.CONFIG.prefix;
    }

    private events() {
        this.CLIENT.on('ready', () => new ReadyEvent(this).onReady());
        this.CLIENT.on('message', (message: discord.Message) => new MessageEvent(this).onMessage(message));
    }

    private loadCommands() {
        fs.readdir(`${__dirname}/../commands`, (err: NodeJS.ErrnoException | null, files:string[]) => {
            if (err) this.LOGGER.error(err);

            files.forEach((f: string, i: number) => {
                let folder: string[] = f.split('.');
                if(!folder) return;

                fs.readdir(`${__dirname}/../commands/${f}/`, (err: NodeJS.ErrnoException | null, jsf: string[]) => {
                    if (err) this.LOGGER.error(err);

                    let jsfiles: string[] = jsf.filter(f => f.split('.').pop() === 'js');

                    jsfiles.forEach((j: string, k: number) => {
                        const cmdClass = require(`${__dirname}/../commands/${f}/${j}`).default;
                        const command: Command = new cmdClass();

                        this.COMMANDS.set(command.getName(), command);
                        this.LOGGER.info(`command ${command.getName()} loaded...`)
                    });
                });
            });
        });
    }
}
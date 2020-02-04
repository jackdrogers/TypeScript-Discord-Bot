import * as  discord from 'discord.js';
import * as fs from 'fs';

import { IBot } from '../interface/IBot';
import { ILogger } from '../interface/ILogger';
import { ICommand } from '../interface/ICommand';

export class Bot implements IBot {

    private _client!: discord.Client;
    private _logger!: ILogger;
    private readonly _commands: ICommand[] = [];

    public get commands(): ICommand[] {
        return this._commands;
    }

    public get logger() {
        return this._logger;
    }

    public get allUsers() {
        return this._client ? this._client.users.array().filter(i => i.id !== '1') : [];
    }

    public get onlineUsers() {
        return this.allUsers.filter(i => i.presence.status !== 'offline');
    }

    public get client() {
        return this._client;
    }

    public start(logger: ILogger, config: string) {
        this._logger = logger;

        this._client = new discord.Client();

        this.loadCommands();

        this._client.login(config);

        this.events();
    }

    private events() {
        this._client.on('ready', () => {
            this._logger.info(this._client.user.username + ' has started');
        });

        this._client.on('message', (message: discord.Message) => {
            this._logger.info(message.content);
        });
    }

    private loadCommands() {
        fs.readdir(`${__dirname}/../commands`, (err: NodeJS.ErrnoException | null, files:string[]) => {
            if(err) this._logger.error(err);

            files.forEach((f: string, i: number) => {
                let folder: string[] = f.split('.');
                if(!folder) return;

                fs.readdir(`${__dirname}/../commands/${f}/`, (err: NodeJS.ErrnoException | null, jsf: string[]) => {
                    let jsfiles: string[] = jsf.filter(f => f.split('.').pop() === 'js');

                    jsfiles.forEach((j: string, k: number) => {
                        const cmdClass = require(`${__dirname}/../commands/${f}/${j}`).default;
                        const command = new cmdClass();

                        this._commands.push(command);
                        this._logger.info(`command ${command.getName()} loaded...`)
                    });
                });
            });
        });
    }
}
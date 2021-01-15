import {SendMessagePort} from "../../domain/ports/out/send-message.port";
import {Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import {Message} from "../../domain/entities/message";
const TelegramBot = require('node-telegram-bot-api');

@Injectable()
export class ContactApiAdapterService implements SendMessagePort {
    constructor(private readonly configService: ConfigService) {}

    async send(message: Message) {
        const bot = new TelegramBot(this.configService.get('telegram.token'));
        try {
            const result = await bot.sendMessage(this.configService.get('telegram.chatId'), JSON.stringify({
                name: message.name,
                email: message.email,
                message: message.message
            }));

            return !!result.message_id;


        } catch (e) {
            return false;
        }
    }
}
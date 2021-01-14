import { Body, Controller, Inject, Post } from '@nestjs/common';
import {SendMessageUseCase, SendMessageUseCaseSymbol} from "../../domain/ports/in/send-message.use-case";
import {SendMessageDto} from "../../dto/send-message.dto";
import {SendMessageCommand} from "../../domain/ports/in/send-message.command";
import {Email} from "../../domain/entities/email";

@Controller('/contact')
export class ContactWebController {
    constructor(
        @Inject(SendMessageUseCaseSymbol)
        private readonly _sendMessageUseCase: SendMessageUseCase,
    ) {}

    @Post('/send')
    async createUser(@Body() sendMessageDto: SendMessageDto) {
        const command = new SendMessageCommand(
            sendMessageDto.name,
            Email.fromString(sendMessageDto.email),
            sendMessageDto.message
        );

        const result = await this._sendMessageUseCase.sendMessage(command);

        return { status: result };
    }
}

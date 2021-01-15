import {Resolver, Mutation, Args} from "@nestjs/graphql";
import {Inject} from "@nestjs/common";
import {Message} from "../types/Message";
import {SendMessageUseCase, SendMessageUseCaseSymbol} from "../../domain/ports/in/send-message.use-case";
import {SendMessageCommand} from "../../domain/ports/in/send-message.command";
import {Email} from "../../domain/entities/email";

@Resolver(of => Message)
export class MessageResolver {
    constructor(
        @Inject(SendMessageUseCaseSymbol)
        private readonly _sendMessageService: SendMessageUseCase
    ) {}

    @Mutation(returns => Boolean)
    async sendMessage(
        @Args('name', { type: () => String }) name: string,
        @Args('email', { type: () => String }) email: string,
        @Args('message', { type: () => String }) message: string
    ) {
        try {
            return await this._sendMessageService.sendMessage(new SendMessageCommand(
                name,
                Email.fromString(email),
                message
            ));
        } catch(e) {
            return false;
        }
    }
}
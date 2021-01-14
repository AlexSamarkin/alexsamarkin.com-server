import {SendMessageCommand} from "./send-message.command";

export const SendMessageUseCaseSymbol = Symbol('SendMessageUseCase');

export interface SendMessageUseCase {
    sendMessage(command: SendMessageCommand): Promise<boolean>
}
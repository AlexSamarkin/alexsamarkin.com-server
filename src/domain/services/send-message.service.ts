import { SendMessageUseCase } from "../ports/in/send-message.use-case";
import { SendMessagePort } from "../ports/out/send-message.port";
import { SendMessageCommand } from "../ports/in/send-message.command";
import { Message } from "../entities/message";

export class SendMessageService implements SendMessageUseCase {

    constructor(private readonly _sendMessagePort: SendMessagePort) {}

    async sendMessage(command: SendMessageCommand): Promise<boolean> {
        const message = new Message(
            command.name,
            command.email,
            command.message
        );

        return await this._sendMessagePort.send(message);
    }
}
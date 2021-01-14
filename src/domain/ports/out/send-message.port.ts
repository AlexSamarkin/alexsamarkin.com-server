import {Message} from "../../entities/message";

export interface SendMessagePort {
    send(message: Message);
}
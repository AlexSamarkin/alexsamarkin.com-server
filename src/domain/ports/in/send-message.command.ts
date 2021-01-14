import {Email} from "../../entities/email";

export class SendMessageCommand {
    constructor(
        private readonly _name: string,
        private readonly _email: Email,
        private readonly _message: string
    ) {}

    get name(): string {
        return this._name;
    }

    get email(): Email {
        return this._email;
    }

    get message(): string {
        return this._message;
    }
}
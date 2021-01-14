import { Email } from "./email";

export class Message {

    constructor(
        private readonly _name: string,
        private readonly _email: Email,
        private readonly _message: string
    ) {}

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email.value;
    }

    get message(): string {
        return this._message;
    }
}
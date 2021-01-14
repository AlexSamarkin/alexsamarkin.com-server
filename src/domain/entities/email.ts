import {Validation} from "./validation";

export class Email implements Validation<string> {
    private readonly _value: string;

    constructor(value: string) {
        if (!this.validate(value)) {
            throw new Error('Wrong email provided');
        }
        this._value = value;
    }

    get value(): string {
        return this._value;
    }

    validate(value: string): boolean
    {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
    }

    public static fromString(email: string): Email {
        return new Email(email);
    }
}
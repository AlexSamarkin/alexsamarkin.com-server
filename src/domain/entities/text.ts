export class Text {
    constructor(
        private readonly _id: string,
        private readonly _value: string
    ) {}

    get id(): string {
        return this._id;
    }

    get value(): string {
        return this._value;
    }
}
export class Navigation {
    constructor(
        private readonly _title: string,
        private readonly _link: string
    ) {}

    get title(): string {
        return this._title;
    }

    get link(): string {
        return this._link;
    }
}
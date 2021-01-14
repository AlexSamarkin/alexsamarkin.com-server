export class File {
    constructor(
        private readonly _url: string,
        private readonly _title: string
    ) {}


    get url(): string {
        return this._url;
    }

    get title(): string {
        return this._title;
    }
}
export class Post {
    constructor(
        private readonly _title: string,
        private readonly _excerpt: string,
        private readonly _slug: string,
        private readonly _thumb: string,
        private readonly _createdAt: Date,
        private readonly _content?: string,
    ) {}

    get title(): string {
        return this._title;
    }

    get excerpt(): string {
        return this._excerpt;
    }

    get content(): string {
        return this._content;
    }

    get slug(): string {
        return this._slug;
    }

    get thumb(): string {
        return this._thumb;
    }

    get createdAt(): Date {
        return this._createdAt;
    }
}
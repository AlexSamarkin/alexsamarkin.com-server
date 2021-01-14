export class Job {
    constructor(
        private readonly _title: string,
        private readonly _description: string,
        private readonly _fromYear: number,
        private readonly _toYear?: number
    ) {}

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get fromYear(): number {
        return this._fromYear;
    }

    get toYear(): number {
        return this._toYear;
    }
}
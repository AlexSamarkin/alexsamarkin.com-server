import {GetTextsQuery} from "../ports/in/get-texts.query";
import {LoadTextsPort} from "../ports/out/load-texts.port";
import {Locale} from "../entities/locale";

export const LoadTextsServiceSymbol = Symbol('LoadTextsService');

export class LoadTextsService implements GetTextsQuery {

    constructor(
        private readonly _loadTextsPort: LoadTextsPort
    ) {}

    async getTexts(locale?: Locale) {
        return await this._loadTextsPort.loadTexts(locale ?? Locale.EN);
    }


}
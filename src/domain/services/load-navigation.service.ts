import {GetNavQuery} from "../ports/in/get-nav.query";
import {LoadNavPort} from "../ports/out/load-navigation.port";
import {Locale} from "../entities/locale";

export const LoadNavigationSymbol = Symbol('LoadNavigationSymbol');

export class LoadNavigationService implements GetNavQuery {
    constructor(
        private readonly _loadNavigationPort: LoadNavPort
    ) {}

    async getNav(locale?: Locale) {
        return await this._loadNavigationPort.loadNav(locale ?? Locale.EN);
    }
}
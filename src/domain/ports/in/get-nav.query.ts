import {Locale} from "../../entities/locale";

export interface GetNavQuery {
    getNav(locale?: Locale);
}
import {Locale} from "../../entities/locale";

export interface GetTextsQuery {
    getTexts(locale?: Locale)
}
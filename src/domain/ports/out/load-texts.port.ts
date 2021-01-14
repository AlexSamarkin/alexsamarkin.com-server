import {Locale} from "../../entities/locale";
import {Text} from "../../entities/text";

export interface LoadTextsPort {
    loadTexts(locale?: Locale): Promise<Text[]>
}
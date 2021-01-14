import {Locale} from "../../entities/locale";
import {Navigation} from "../../entities/navigation";

export interface LoadNavPort {
    loadNav(locale?: Locale): Promise<Navigation[]>
}
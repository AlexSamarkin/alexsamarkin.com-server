import {Post} from "../../entities/post";
import {Locale} from "../../entities/locale";

export interface GetPostQuery {
    getPost(slug: string, locale?: Locale);
}
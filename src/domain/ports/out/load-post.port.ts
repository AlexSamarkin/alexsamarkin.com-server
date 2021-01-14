import {Post} from "../../entities/post";
import {Locale} from "../../entities/locale";

export interface LoadPostPort {
    loadPost(slug: string, locale?: Locale): Promise<Post>
}
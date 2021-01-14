import {Post} from "../../entities/post";
import {Locale} from "../../entities/locale";

export interface LoadPostsPort {
    loadPosts(locale?: Locale): Promise<Post[]>
}
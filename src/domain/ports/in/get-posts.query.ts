import {Locale} from "../../entities/locale";

export interface GetPostsQuery {
   getPosts(locale?: Locale);
}
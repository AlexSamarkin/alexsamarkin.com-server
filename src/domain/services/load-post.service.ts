import {GetPostQuery} from "../ports/in/get-post.query";
import {GetPostsQuery} from "../ports/in/get-posts.query";
import {LoadPostPort} from "../ports/out/load-post.port";
import {LoadPostsPort} from "../ports/out/load-posts.port";
import {Post} from "../entities/post";
import {Locale} from "../entities/locale";

export const LoadPostServiceSymbol = Symbol('LoadPostService');

export class LoadPostService implements GetPostQuery, GetPostsQuery {
    constructor(
        private readonly _loadPostPort: LoadPostPort,
        private readonly _loadPostsPort: LoadPostsPort
    ) {}

    async getPost(slug: string, locale?: Locale): Promise<Post> {
        if (!locale) {
            locale = Locale.EN;
        }
        return await this._loadPostPort.loadPost(slug, locale);
    }

    async getPosts(locale?: Locale): Promise<Post[]> {
        if (!locale) {
            locale = Locale.EN;
        }
        return await this._loadPostsPort.loadPosts(locale);
    }


}
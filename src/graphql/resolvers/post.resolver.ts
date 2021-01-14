import {Post} from "../types/Post";
import {Resolver, Query, Args} from "@nestjs/graphql";
import {Inject, NotFoundException} from "@nestjs/common";
import {LoadPostService, LoadPostServiceSymbol} from "../../domain/services/load-post.service";
import {Locale} from "../../domain/entities/locale";

@Resolver(of => Post)
export class PostResolver {
    constructor(
        @Inject(LoadPostServiceSymbol)
        private readonly _loadPostService: LoadPostService
    ) {}

    @Query(returns => Post)
    async post(
        @Args('slug', { type: () => String }) slug: string,
        @Args('locale', { type: () => String }) locale: Locale
    ) {
        const post = await this._loadPostService.getPost(slug, locale);
        if (!post) {
            throw new NotFoundException();
        }
        return post;
    }

    @Query(returns => [Post])
    async posts(@Args('locale', { type: () => String }) locale: Locale) {
        return await this._loadPostService.getPosts(locale);
    }
}
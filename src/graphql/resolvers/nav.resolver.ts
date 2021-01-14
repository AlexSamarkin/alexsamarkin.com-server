import {Post} from "../types/Post";
import {Resolver, Query, Args} from "@nestjs/graphql";
import {Inject, NotFoundException} from "@nestjs/common";
import {LoadPostService, LoadPostServiceSymbol} from "../../domain/services/load-post.service";
import {Locale} from "../../domain/entities/locale";
import {Nav} from "../types/Nav";
import {LoadNavigationService, LoadNavigationSymbol} from "../../domain/services/load-navigation.service";

@Resolver(of => Nav)
export class NavResolver {
    constructor(
        @Inject(LoadNavigationSymbol)
        private readonly _loadNavService: LoadNavigationService
    ) {}

    @Query(returns => [Nav])
    async navs(@Args('locale', { type: () => String }) locale: Locale) {
        return await this._loadNavService.getNav(locale);
    }
}
import {Resolver, Query, Args} from "@nestjs/graphql";
import {Inject, NotFoundException} from "@nestjs/common";
import {Locale} from "../../domain/entities/locale";
import {ContentText} from "../types/ContentText";
import {LoadTextsService, LoadTextsServiceSymbol} from "../../domain/services/load-texts.service";

@Resolver(of => ContentText)
export class TextsResolver {
    constructor(
        @Inject(LoadTextsServiceSymbol)
        private readonly _loadTextsService: LoadTextsService
    ) {}

    @Query(returns => ContentText)
    async texts(
        @Args('locale', { type: () => String }) locale: Locale
    ) {
        const texts = await this._loadTextsService.getTexts(locale);
        if (!texts) {
            throw new NotFoundException();
        }

        return {
            backendText: texts.find((text) => text.id === 'backendText').value,
            frontendText: texts.find((text) => text.id === 'frontendText').value,
            aboutText: texts.find((text) => text.id === 'aboutText').value
        }
    }
}
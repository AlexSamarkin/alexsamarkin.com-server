import {Resolver, Query} from "@nestjs/graphql";
import {Inject} from "@nestjs/common";
import {CV} from "../types/CV";
import {LoadCvService, LoadCvServiceSymbol} from "../../domain/services/load-cv.service";

@Resolver(of => CV)
export class CVResolver {
    constructor(
        @Inject(LoadCvServiceSymbol)
        private readonly _loadCVService: LoadCvService
    ) {}

    @Query(returns => CV)
    async cv() {
        const { url } = await this._loadCVService.getCV();
        return {
            url
        }
    }
}
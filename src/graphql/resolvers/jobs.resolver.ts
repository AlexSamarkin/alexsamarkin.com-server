import {Resolver, Query, Args} from "@nestjs/graphql";
import {Inject} from "@nestjs/common";
import {Locale} from "../../domain/entities/locale";
import {LoadJobsService, LoadJobsServiceSymbol} from "../../domain/services/load-jobs.service";
import {Job} from "../types/Job";

@Resolver(of => Job)
export class JobsResolver {
    constructor(
        @Inject(LoadJobsServiceSymbol)
        private readonly _loadJobsService: LoadJobsService
    ) {}

    @Query(returns => [Job])
    async jobs(@Args('locale', { type: () => String }) locale: Locale) {
        return await this._loadJobsService.getJobs(locale);
    }
}
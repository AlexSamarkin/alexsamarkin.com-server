import {Resolver, Query, Args} from "@nestjs/graphql";
import {Inject} from "@nestjs/common";
import {Locale} from "../../domain/entities/locale";
import {Course} from "../types/Course";
import {LoadCoursesService, LoadCoursesServiceSymbol} from "../../domain/services/load-courses.service";

@Resolver(of => Course)
export class CoursesResolver {
    constructor(
        @Inject(LoadCoursesServiceSymbol)
        private readonly _loadCoursesService: LoadCoursesService
    ) {}

    @Query(returns => [Course])
    async courses(@Args('locale', { type: () => String }) locale: Locale) {
        return await this._loadCoursesService.getCourses(locale);
    }
}
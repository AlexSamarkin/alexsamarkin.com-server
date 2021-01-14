import {LoadCoursesPort} from "../../domain/ports/out/load-courses.port";
import {Injectable} from "@nestjs/common";
import {GraphqlRequestService} from "../graphql-request/graphql-request.service";
import {Locale} from "../../domain/entities/locale";
import {Course} from "../../domain/entities/course";
import coursesQuery from "../../graphql/queries/external/courses.graphql";

@Injectable()
export class CoursesPersistenceAdapterService implements LoadCoursesPort {
    constructor(
        private readonly graphQLRequestService: GraphqlRequestService
    ) {}

    async loadCourses(locale: Locale): Promise<Course[]> {
        this.graphQLRequestService.setLocale(locale);
        const data = await this.graphQLRequestService.query(coursesQuery);
        if (!data || !data.courses) {
            throw new Error('no courses found')
        }

        return data.courses.map((course) => {
            return new Course(
                course.title,
                course.description ?? "",
                course.fromYear,
                course.toYear
            );
        });
    }


}
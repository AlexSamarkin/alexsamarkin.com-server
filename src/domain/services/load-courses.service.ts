import {GetCoursesQuery} from "../ports/in/get-courses.query";
import {LoadCoursesPort} from "../ports/out/load-courses.port";
import {Locale} from "../entities/locale";
import {Course} from "../entities/course";

export const LoadCoursesServiceSymbol = Symbol('LoadCoursesService');

export class LoadCoursesService implements GetCoursesQuery {
    constructor(
        private readonly _loadCoursesPort: LoadCoursesPort
    ) {}

    async getCourses(locale?: Locale): Promise<Course[]> {
        return await this._loadCoursesPort.loadCourses(locale ?? Locale.EN);
    }
}
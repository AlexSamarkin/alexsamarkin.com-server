import {Locale} from "../../entities/locale";

export interface GetCoursesQuery {
    getCourses(locale?: Locale);
}
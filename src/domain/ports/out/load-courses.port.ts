import {Locale} from "../../entities/locale";
import {Course} from "../../entities/course";

export interface LoadCoursesPort {
    loadCourses(locale: Locale): Promise<Course[]>
}
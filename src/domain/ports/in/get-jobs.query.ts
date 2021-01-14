import {Locale} from "../../entities/locale";

export interface GetJobsQuery {
    getJobs(locale?: Locale);
}
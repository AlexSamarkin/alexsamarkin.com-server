import {Locale} from "../../entities/locale";
import {Job} from "../../entities/job";

export interface LoadJobsPort {
    loadJobs(locale: Locale): Promise<Job[]>
}
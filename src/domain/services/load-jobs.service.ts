import {GetJobsQuery} from "../ports/in/get-jobs.query";
import {LoadJobsPort} from "../ports/out/load-jobs.port";
import {Locale} from "../entities/locale";
import {Job} from "../entities/job";

export const LoadJobsServiceSymbol = Symbol('LoadJobsServiceSymbol');

export class LoadJobsService implements GetJobsQuery {
    constructor(
        private readonly _loadJobsPort: LoadJobsPort
    ) {}

    async getJobs(locale?: Locale): Promise<Job[]> {
        return await this._loadJobsPort.loadJobs(locale ?? Locale.EN);
    }
}
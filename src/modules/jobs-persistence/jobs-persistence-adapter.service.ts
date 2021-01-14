import {LoadJobsPort} from "../../domain/ports/out/load-jobs.port";
import {GraphqlRequestService} from "../graphql-request/graphql-request.service";
import {Locale} from "../../domain/entities/locale";
import {Job} from "../../domain/entities/job";
import jobsQuery from "../../graphql/queries/external/jobs.graphql";
import {Injectable} from "@nestjs/common";

@Injectable()
export class JobsPersistenceAdapterService implements LoadJobsPort {
    constructor(private graphQLRequestService: GraphqlRequestService) {}

    async loadJobs(locale: Locale): Promise<Job[]> {
        this.graphQLRequestService.setLocale(locale);
        const data = await this.graphQLRequestService.query(jobsQuery);
        if (!data || !data.jobs) {
            throw new Error('no jobs found')
        }

        return data.jobs.map((job) => {
            return new Job(
               job.title,
               job.description,
               job.fromYear,
               job.toYear
            );
        });
    }


}
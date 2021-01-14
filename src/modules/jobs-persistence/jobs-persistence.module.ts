import {Global, Module} from "@nestjs/common";
import {JobsPersistenceAdapterService} from "./jobs-persistence-adapter.service";
import {LoadJobsService, LoadJobsServiceSymbol} from "../../domain/services/load-jobs.service";
import {GraphqlRequestModule} from "../graphql-request/graphql-request.module";
import {JobsResolver} from "../../graphql/resolvers/jobs.resolver";

@Global()
@Module({
    imports: [GraphqlRequestModule],
    providers: [
        JobsPersistenceAdapterService,
        JobsResolver,
        {
            provide: LoadJobsServiceSymbol,
            useFactory: (
                jobsPersistenceAdapterService: JobsPersistenceAdapterService
            ) => {
                return new LoadJobsService(jobsPersistenceAdapterService)
            },
            inject: [JobsPersistenceAdapterService]
        }
    ],
    exports: [LoadJobsServiceSymbol]
})
export class JobsPersistenceModule {}
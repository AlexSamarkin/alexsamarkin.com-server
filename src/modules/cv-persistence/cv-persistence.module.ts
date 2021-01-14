import {Global, Module} from "@nestjs/common";
import {GraphqlRequestModule} from "../graphql-request/graphql-request.module";
import {LoadCvService, LoadCvServiceSymbol} from "../../domain/services/load-cv.service";
import {CVPersistenceAdapterService} from "./cv-persistence-adapter.service";
import {CVResolver} from "../../graphql/resolvers/cv.resolver";

@Global()
@Module({
    imports: [GraphqlRequestModule],
    providers: [
        CVPersistenceAdapterService,
        CVResolver,
        {
            provide: LoadCvServiceSymbol,
            useFactory: (cVPersistenceAdapterService: CVPersistenceAdapterService) => {
                return new LoadCvService(cVPersistenceAdapterService)
            },
            inject: [CVPersistenceAdapterService]
        }
    ],
    exports: [LoadCvServiceSymbol]
})
export class CvPersistenceModule {}
import {Global, Module} from "@nestjs/common";
import {GraphqlRequestModule} from "../graphql-request/graphql-request.module";
import {ContentTextPersistenceAdapter} from "./content-text-persistence-adapter.service";
import {LoadTextsService, LoadTextsServiceSymbol} from "../../domain/services/load-texts.service";
import {TextsResolver} from "../../graphql/resolvers/texts.resolver";

@Global()
@Module({
    imports: [GraphqlRequestModule],
    providers: [
        TextsResolver,
        ContentTextPersistenceAdapter,
        {
            provide: LoadTextsServiceSymbol,
            useFactory: (
                contentTextPersistenceAdapter: ContentTextPersistenceAdapter
            ) => {
                return new LoadTextsService(contentTextPersistenceAdapter)
            },
            inject: [ContentTextPersistenceAdapter]
        }
    ],
    exports: [LoadTextsServiceSymbol]
})
export class ContentTextPersistenceModule {}
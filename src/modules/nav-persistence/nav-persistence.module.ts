import {Global, Module} from "@nestjs/common";
import {GraphqlRequestModule} from "../graphql-request/graphql-request.module";
import {NavPersistenceAdapterService} from "./nav-persistence-adapter.service";
import {LoadNavigationService, LoadNavigationSymbol} from "../../domain/services/load-navigation.service";
import {NavResolver} from "../../graphql/resolvers/nav.resolver";

@Global()
@Module({
    imports: [GraphqlRequestModule],
    providers: [
        NavPersistenceAdapterService,
        NavResolver,
        {
            provide: LoadNavigationSymbol,
            useFactory: (
               navPersistenceAdapterService: NavPersistenceAdapterService,
            ) => {
                return new LoadNavigationService(navPersistenceAdapterService);
            },
            inject: [NavPersistenceAdapterService],
        }
    ],
    exports: [LoadNavigationSymbol]
})
export class NavPersistenceModule {}
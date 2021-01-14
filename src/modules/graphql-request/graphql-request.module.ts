import {Global, Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {GraphQLClient} from "graphql-request";
import {GraphQLClientSymbol, GraphqlRequestService} from "./graphql-request.service";

@Global()
@Module({
    imports: [ConfigModule],
    controllers: [],
    providers: [
        GraphqlRequestService,
        {
            provide: GraphQLClientSymbol,
            useFactory: (configService: ConfigService) => {
                return new GraphQLClient(
                    configService.get('graphCMS'), {
                        headers: {
                            Authorization: `Bearer ${configService.get('graphCMSToken')}`,
                        },
                    }
                )
            },
            inject: [ConfigService]
        }
    ],
    exports: [GraphqlRequestService]
})
export class GraphqlRequestModule {}

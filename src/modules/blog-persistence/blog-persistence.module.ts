import {Global, Module} from "@nestjs/common";
import {LoadPostService, LoadPostServiceSymbol} from "../../domain/services/load-post.service";
import {BlogPersistenceAdapterService} from "./blog-persistence-adapter.service";
import {GraphqlRequestModule} from "../graphql-request/graphql-request.module";
import {PostResolver} from "../../graphql/resolvers/post.resolver";

@Global()
@Module({
    imports: [GraphqlRequestModule],
    providers: [
        PostResolver,
        BlogPersistenceAdapterService,
        {
            provide: LoadPostServiceSymbol,
            useFactory: (
                blogPersistenceAdapterService: BlogPersistenceAdapterService,
            ) => {
                return new LoadPostService(blogPersistenceAdapterService, blogPersistenceAdapterService);
            },
            inject: [BlogPersistenceAdapterService],
        },
    ],
    exports: [LoadPostServiceSymbol],
})
export class BlogPersistenceModule {}
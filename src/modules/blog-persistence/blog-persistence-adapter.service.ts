import {LoadPostsPort} from "../../domain/ports/out/load-posts.port";
import {LoadPostPort} from "../../domain/ports/out/load-post.port";
import postsQuery from "../../graphql/queries/external/posts.graphql";
import postQuery from "../../graphql/queries/external/postBySlug.graphql";
import {Post} from "../../domain/entities/post";
import {Injectable} from "@nestjs/common";
import {GraphqlRequestService} from "../graphql-request/graphql-request.service";

@Injectable()
export class BlogPersistenceAdapterService implements LoadPostsPort, LoadPostPort {
    constructor(private graphQLRequestService: GraphqlRequestService) {}

    async loadPosts(locale = 'en'): Promise<Post[]> {
        this.graphQLRequestService.setLocale(locale);
        const data = await this.graphQLRequestService.query(postsQuery);
        if (!data || !data.posts) {
            throw new Error('no posts found')
        }

        return data.posts.map((post): Post => {
            return new Post(
                post.title,
                post.excerpt,
                post.slug,
                post.thumb.url,
                new Date(post.createdAt)
            );
        });
    }

    async loadPost(slug: string, locale = 'en'): Promise<any> {
        this.graphQLRequestService.setLocale(locale);
        const data = await this.graphQLRequestService.query(postQuery(slug));
        if (!data || !data.post) {
            throw new Error('no post found')
        }

        return new Post(
            data.post.title,
            data.post.excerpt,
            data.post.slug,
            data.post.thumb.url,
            new Date(data.post.createdAt),
            data.post.content,
        );
    }
}
import {Post} from "../../domain/entities/post";

export class BlogWebMapper {
    public static mapToWeb(post: Post) {
        return {
            title: post.title,
            excerpt: post.excerpt,
            thumb: post.thumb,
            slug: post.slug,
            date: post.createdAt.toLocaleDateString(),
            content: post.content ?? ''
        }
    }
}
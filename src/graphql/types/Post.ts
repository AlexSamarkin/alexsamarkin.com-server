import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
    @Field(type => String)
    title: string;

    @Field(type => String)
    excerpt: string;

    @Field(type => String)
    slug: string;

    @Field(type => String)
    thumb: string;

    @Field({nullable: true})
    content?: string;

    @Field(type => Date)
    createdAt: Date;
}
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Nav {
    @Field(type => String)
    title: string;

    @Field(type => String)
    link: string;
}
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Message {
    @Field(type => String)
    name: string;

    @Field(type => String)
    email: string;

    @Field(type => String)
    message: string;
}
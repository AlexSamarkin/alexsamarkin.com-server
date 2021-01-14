import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ContentText {
    @Field(type => String)
    aboutText: string;

    @Field(type => String)
    backendText: string;

    @Field(type => String)
    frontendText: string;
}
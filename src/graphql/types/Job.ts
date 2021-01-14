import {Field, Int, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class Job {
    @Field(type => String)
    title: string;

    @Field(type => String)
    description: string;

    @Field(type => Int)
    fromYear: number;

    @Field(type => Int, { nullable: true })
    toYear?: number;
}
import {Field, Int, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class Course {
    @Field(type => String)
    title: string;

    @Field(type => String)
    description: string;

    @Field(type => Int)
    fromYear: number;

    @Field(type => Int)
    toYear: number;
}
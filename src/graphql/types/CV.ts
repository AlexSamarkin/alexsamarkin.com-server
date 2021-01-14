import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class CV {
    @Field(type => String)
    url: string;
}
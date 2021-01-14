import {Inject, Injectable} from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { ConfigService } from "@nestjs/config";

export const GraphQLClientSymbol = Symbol('GraphQLClientSymbol');

@Injectable()
export class GraphqlRequestService {

    constructor(
        private readonly configService: ConfigService,
        @Inject(GraphQLClientSymbol) private client: GraphQLClient
    ) {}

    public setLocale(locale: string): void {
        this.client = this.client.setHeader('gcms-locales', locale);
    }

    public async query(query: string, variables?: Record<any, any>): Promise<any> {
        try {
            return await this.client.request(query, variables);
        } catch (e) {
            throw new Error(`Error fetching data: ${e.message}`);
        }
    }
}

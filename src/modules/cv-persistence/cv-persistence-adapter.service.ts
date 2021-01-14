import {LoadCvPort} from "../../domain/ports/out/load-cv.port";
import {GraphqlRequestService} from "../graphql-request/graphql-request.service";
import cvQuery from "../../graphql/queries/external/cv.graphql";
import {File} from "../../domain/entities/file";
import {Injectable} from "@nestjs/common";

@Injectable()
export class CVPersistenceAdapterService implements LoadCvPort {
    constructor(
        private readonly graphQLRequestService: GraphqlRequestService
    ) {}

    async loadCV(): Promise<File> {
        const data = await this.graphQLRequestService.query(cvQuery);
        if (!data || !data.cv) {
            throw new Error('no cv found')
        }

        return new File(
            data.cv.cv.url,
            'cv'
        );
    }
}
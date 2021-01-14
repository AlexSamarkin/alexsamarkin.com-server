import {LoadTextsPort} from "../../domain/ports/out/load-texts.port";
import {Injectable} from "@nestjs/common";
import {GraphqlRequestService} from "../graphql-request/graphql-request.service";
import {Locale} from "../../domain/entities/locale";
import textsQuery from "../../graphql/queries/external/texts.graphql";
import {Text} from "../../domain/entities/text";

@Injectable()
export class ContentTextPersistenceAdapter implements LoadTextsPort {
    constructor(private graphQLRequestService: GraphqlRequestService) {}

    async loadTexts(locale?: Locale): Promise<Text[]> {
        this.graphQLRequestService.setLocale(locale);
        const data = await this.graphQLRequestService.query(textsQuery);
        if (!data || !data.texts) {
            throw new Error('no texts found')
        }

        return [
            new Text("frontendText", data.texts[0].frontend),
            new Text("backendText", data.texts[0].backend),
            new Text("aboutText", data.texts[0].about)
        ];
    }
}
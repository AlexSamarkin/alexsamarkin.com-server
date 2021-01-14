import {LoadNavPort} from "../../domain/ports/out/load-navigation.port";
import {GraphqlRequestService} from "../graphql-request/graphql-request.service";
import {Locale} from "../../domain/entities/locale";
import {Navigation} from "../../domain/entities/navigation";
import navsQuery from "../../graphql/queries/external/navs.graphql";
import {Injectable} from "@nestjs/common";

@Injectable()
export class NavPersistenceAdapterService implements LoadNavPort {
    constructor(private graphQLRequestService: GraphqlRequestService) {}

    async loadNav(locale?: Locale): Promise<Navigation[]> {
        this.graphQLRequestService.setLocale(locale);
        const data = await this.graphQLRequestService.query(navsQuery);
        if (!data || !data.navs) {
            throw new Error('no nav found')
        }

        return data.navs.map((nav) => {
            return new Navigation(
                nav.title,
                nav.link
            );
        });
    }
}
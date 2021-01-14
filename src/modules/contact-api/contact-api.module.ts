import {Global, Module} from "@nestjs/common";
import {ContactApiAdapterService} from "./contact-api-adapter.service";
import {SendMessageUseCaseSymbol} from "../../domain/ports/in/send-message.use-case";
import {SendMessageService} from "../../domain/services/send-message.service";

@Global()
@Module({
    providers: [
        ContactApiAdapterService,
        {
            provide: SendMessageUseCaseSymbol,
            useFactory: (
                contactApiAdapterService: ContactApiAdapterService,
            ) => {
                return new SendMessageService(contactApiAdapterService);
            },
            inject: [ContactApiAdapterService],
        },
    ],
    exports: [SendMessageUseCaseSymbol],
})
export class ContactApiModule {}
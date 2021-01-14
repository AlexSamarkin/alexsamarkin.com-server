import {Module} from "@nestjs/common";
import {ContactWebController} from "./contact-web.controller";

@Module({
    controllers: [ContactWebController]
})
export class ContactWebModule {}
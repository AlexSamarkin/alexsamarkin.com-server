import {Module} from "@nestjs/common";
import {NavWebController} from "./nav-web.controller";

@Module({
    controllers: [
        NavWebController
    ]
})
export class NavWebModule {}
import {Module} from "@nestjs/common";
import {BlogWebController} from "./blog-web.controller";

@Module({
    controllers: [BlogWebController]
})
export class BlogWebModule {}
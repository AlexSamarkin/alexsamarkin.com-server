import {Controller, Get, Headers, HttpStatus, Inject, Res} from "@nestjs/common";
import {LoadNavigationService, LoadNavigationSymbol} from "../../domain/services/load-navigation.service";

@Controller('menu')
export class NavWebController {
    constructor(
        @Inject(LoadNavigationSymbol)
        private readonly _loadNavService: LoadNavigationService
    ) {}

    @Get()
    async getMenu(@Headers() headers, @Res() res): Promise<void> {
        try {
            const locale = headers['x-locale'];
            const menu = await this._loadNavService.getNav(locale);
            res.status(HttpStatus.OK).json(menu);
        } catch (e) {
            console.log(e)
            res.status(HttpStatus.OK).json([]);
        }
    }
}
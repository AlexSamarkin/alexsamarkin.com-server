import {Body, Controller, Get, Headers, HttpStatus, Inject, Post, Res} from "@nestjs/common";
import {LoadPostService, LoadPostServiceSymbol} from "../../domain/services/load-post.service";
import {GetPostBySlugDto} from "../../dto/get-post-by-slug.dto";
import {BlogWebMapper} from "./blog-web.mapper";

@Controller('/articles')
export class BlogWebController {
    constructor(
        @Inject(LoadPostServiceSymbol)
        private readonly _loadPostService: LoadPostService
    ) {}

    @Get('all')
    async getPosts(@Headers() headers, @Res() res): Promise<void> {
        try {
            const locale = headers['x-locale'];
            const posts = await this._loadPostService.getPosts(locale);
            res.status(HttpStatus.OK).json(posts.map((post) => BlogWebMapper.mapToWeb(post)));
        } catch (e) {
            res.status(HttpStatus.OK).json([]);
        }
    }

    @Post('slug')
    async getPostBySlug(@Headers() headers, @Body() getPostBySlugDto: GetPostBySlugDto, @Res() res): Promise<void> {
        try {
            const locale = headers['x-locale']
            const post = await this._loadPostService.getPost(getPostBySlugDto.slug, locale);
            res.status(HttpStatus.OK).json(BlogWebMapper.mapToWeb(post));
        } catch (e) {
            res.status(HttpStatus.OK).json([]);
        }
    }
}
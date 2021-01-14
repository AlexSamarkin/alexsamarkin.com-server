import {Locale} from "../domain/entities/locale";

export class GetPostBySlugDto {
    slug: string;
    locale?: Locale;
}
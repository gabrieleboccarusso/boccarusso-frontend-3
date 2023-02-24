import { Tag } from "./tag";

export interface Article {
 slug: string;
 title: string;
 intro: string;
 image: string;
 content: string;
 creationDate: string;
 lastUpdate: string;
 tags: Tag[];
}

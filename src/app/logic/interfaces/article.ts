import { Tag } from "./tag";

export interface Article {
 slug: string;
 title: string;
 tagline: string;
 image: string;
 content: string;
 creationDate: string;
 lastUpdate: string;
 tag: Tag[];
}

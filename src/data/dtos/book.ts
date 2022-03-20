export interface BookDto {
    id: number;
    title: string;
    thumbnailUrl: string;
    authors: string[];
    categories: string[];
    shortDescription: string;
    longDescription: string;
    pageCount: number;
    isbn: string;
    publishedDate: string | Date;
}

export interface BookCreateDto { 
    title: string;
    thumbnailUrl: string;
    authors: string[];
    categories: string[];
    shortDescription: string;
    longDescription: string;
    pageCount: number;
    isbn: string;
    publishedDate: Date;
}

export interface BooksInputDto {
    skipCount?: number;
    maxResultCount?: number;
    filter? : string;
}

export interface PagedResultDto<T> {
    items: T[];
    totalCount: number;
}
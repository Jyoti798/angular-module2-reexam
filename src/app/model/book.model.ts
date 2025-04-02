export interface Book{
    id?:string;
    title:string;
    author:string;
    isbn:string;
    avalibility:boolean;
    checkedOutBy?:string;
    checkedOutDate?:string;
returnDate?:string|null;
}
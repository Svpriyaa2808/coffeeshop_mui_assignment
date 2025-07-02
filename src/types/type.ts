export interface MenuType {
    name:string,
    price:number,
    description:string,
    image:string
    preparation?:string
}

export interface HomePageContentType {
    title:string,
    image: string,
    content1 : string,
    content2 : string,
    content3 : string,
    order?:number
}
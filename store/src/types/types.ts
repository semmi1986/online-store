interface SortSecond{
    title: string,
    key?: undefined;
}

export interface BasketPagePullArr{
    map(arg0: (item: any) => JSX.Element): unknown;
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    id: number,
    images: string[],
    price:  number,
    rating: number,
    stock: number,
    thumbnail: string,
    title: string,
    [1]? : number;
}

export default SortSecond;
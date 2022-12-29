interface SortSecond{
    title: string,
    key?: undefined;
}

export interface BasketPagePullArr{
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
    title: string;
}

export default SortSecond;
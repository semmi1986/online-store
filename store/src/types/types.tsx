export interface SortSecond{
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


export interface SearchI{
  searchValue: string;
}

export interface Sorts{
  name: string, 
  sortProperty: string
}

export interface URLSearchParams{
  category?: string;
  brand?:string,
  price?: string, 
  sort?: string,
  stock?: string,
  search?:string,
}

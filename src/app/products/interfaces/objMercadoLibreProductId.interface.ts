export interface RESTObjMLProductID {
    author:        Author;
    category:      string;
    condition:     string;
    pictures:      string;
    free_shipping: boolean;
    title:         string;
    price:         Price;
    sold_quantity: number;
}

export interface Author {
    name:     string;
    lastname: string;
}

export interface Price {
    currency: string;
    amount:   number;
}
export interface Customer {
    _id: string;
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    admin: boolean;
    gender: string;
    birthday: Date;
}

export interface Product {
    _id: string;
    title: string;
    description: string;
    slug: string;
    image: string;
    price: number;
    active: boolean;
    amount: number;
    category: string;
}

export interface Order {
    _id: string;
    customer: string;
    status: string;
    createDate: Date;
    items: [
        quantity: number,
        product: string,
        image: string,
        title: string,
        price: number
    ];
}

interface Product {
    id: number
    name: string
    price: number
    description: string
    image: string
}

interface CartItem {
    product: Product
    quantity: number
}

interface IBlog {
    id: number
    title: string
    author: string
    content: string
}

interface Discount {
    id: number;
    MaCode: string;
    description: string;
    condition: string;
}
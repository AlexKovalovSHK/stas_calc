// src/types.ts
export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
}

export interface Service {
    name: string
    price: number
    description: string
  }

export interface CartItem {
  product: Product
  quantity: number
}

export interface Corb {
  products: Product[]
  services: Service[]
  totalPrice: number
}

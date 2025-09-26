export interface CartItem {
  id: number;
  name: string;
  collection: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
  category: 'clothing' | 'shoes' | 'accessories';
}

export interface Product {
  id: number;
  name: string;
  collection: string;
  price: number;
  image: string;
  category: 'clothing' | 'shoes' | 'accessories';
  description?: string;
  sizes?: string[];
  colors?: string[];
}
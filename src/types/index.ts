export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface NavItem {
  name: string;
  page: PageType;
}

export type PageType = 'home' | 'products' | 'about' | 'contact';

export interface FormData {
  name: string;
  email: string;
  message: string;
}
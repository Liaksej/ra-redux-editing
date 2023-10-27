export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface ProductState {
  products: Product[] | [];
  editId: number | null;
}

export interface AppState {
  list: ProductState | any;
}

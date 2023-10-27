export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface ProductState {
  products: Product[] | [];
  editId: number | null;
  filter: string;
}

export interface AppState {
  list: ProductState | any;
}

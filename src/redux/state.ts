export interface ProductState {
  id: string;
  name: string;
  price: number;
}

export interface AppState {
  list: ProductState[] | [];
  form: ProductState | {};
}

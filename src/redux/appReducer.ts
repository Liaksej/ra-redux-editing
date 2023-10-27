import { Action, ActionTypes } from "@/redux/action";
import { AppState, Product, ProductState } from "@/redux/state";
import { createSelector } from "reselect";

const getProduct = (state: AppState) => state.list.products;

const getFilter = (state: AppState) => state.list.filter;

export const productFilteredSelector = createSelector(
  [getProduct, getFilter],
  (products, filter) => {
    if (filter) {
      return products.filter((product: Product) =>
        product.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
    return products;
  },
);

export function appReducer(
  state: ProductState = {
    products: [],
    editId: null,
    filter: "",
  },
  action: Action,
) {
  switch (action.type) {
    case ActionTypes.ADD:
      return { ...state, products: [...state.products, action.payload] };
    case ActionTypes.REMOVE:
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id,
        ),
      };
    case ActionTypes.EDIT:
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
        editId: null,
      };
    case ActionTypes.EXTRACT_TO_FORM:
      return {
        ...state,
        editId: action.payload,
      };
    case ActionTypes.FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

import { Action, ActionTypes } from "@/redux/action";
import { ProductState } from "@/redux/state";

export function appReducer(
  state: ProductState = { products: [], editId: null },
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
    default:
      return state;
  }
}

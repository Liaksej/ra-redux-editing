import { Action, ActionTypes } from "@/redux/action";
import { ProductState } from "@/redux/state";

export function appReducer(state: ProductState[] = [], action: Action) {
  switch (action.type) {
    case ActionTypes.ADD:
      return [...state, action.payload];
    case ActionTypes.REMOVE:
      return state.filter((item) => item.id !== action.payload.id);
    case ActionTypes.EDIT:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    default:
      return state;
  }
}

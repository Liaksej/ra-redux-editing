import { Action, ActionTypes } from "@/redux/action";
import { ProductState } from "@/redux/state";

export function extractReducer(state: ProductState | {} = {}, action: Action) {
  switch (action.type) {
    case ActionTypes.EXTRACT_TO_FORM:
      return action.payload;
    case ActionTypes.CLEAR_FORM:
      return {};
    default:
      return state;
  }
}

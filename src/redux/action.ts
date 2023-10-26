import { ProductState } from "@/redux/state";

export enum ActionTypes {
  ADD = "add",
  REMOVE = "remove",
  EDIT = "edit",
  EXTRACT_TO_FORM = "extractToForm",
  CLEAR_FORM = "clearForm",
}

export interface AddAction {
  type: ActionTypes.ADD;
  payload: ProductState;
}

export interface RemoveAction {
  type: ActionTypes.REMOVE;
  payload: Pick<ProductState, "id">;
}

export interface EditAction {
  type: ActionTypes.EDIT;
  payload: ProductState;
}

export interface ExtractToFormAction {
  type: ActionTypes.EXTRACT_TO_FORM;
  payload: ProductState;
}

export interface ClearFormAction {
  type: ActionTypes.CLEAR_FORM;
}

export type Action =
  | AddAction
  | RemoveAction
  | EditAction
  | ExtractToFormAction
  | ClearFormAction;

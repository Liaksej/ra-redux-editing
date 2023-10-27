import { Product, ProductState } from "@/redux/state";

export enum ActionTypes {
  ADD = "add",
  REMOVE = "remove",
  EDIT = "edit",
  EXTRACT_TO_FORM = "extractToForm",
  CLEAR_FORM = "clearForm",
  FILTER = "filter",
}

export interface AddAction {
  type: ActionTypes.ADD;
  payload: Product;
}

export interface RemoveAction {
  type: ActionTypes.REMOVE;
  payload: Pick<Product, "id">;
}

export interface EditAction {
  type: ActionTypes.EDIT;
  payload: Product;
}

export interface ExtractToFormAction {
  type: ActionTypes.EXTRACT_TO_FORM;
  payload: Pick<ProductState, "editId">;
}

export interface ClearFormAction {
  type: ActionTypes.CLEAR_FORM;
}

interface FilterAction {
  type: ActionTypes.FILTER;
  payload: string;
}

export type Action =
  | AddAction
  | RemoveAction
  | EditAction
  | ExtractToFormAction
  | ClearFormAction
  | FilterAction;

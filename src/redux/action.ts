import { Product, ProductState } from "@/redux/state";

export enum ActionTypes {
  ADD = "add",
  REMOVE = "remove",
  EDIT = "edit",
  EXTRACT_TO_FORM = "extractToForm",
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

interface FilterAction {
  type: ActionTypes.FILTER;
  payload: string;
}

export type Action =
  | AddAction
  | RemoveAction
  | EditAction
  | ExtractToFormAction
  | FilterAction;

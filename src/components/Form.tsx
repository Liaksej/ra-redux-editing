import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useState } from "react";
import { ActionTypes } from "@/redux/action";
import { v4 as uuid } from "uuid";
import { AppState } from "@/redux/state";

export function Form() {
  const dispatch = useDispatch();
  const formState = useSelector((state: AppState) => state.form);

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const price = data.get("price");

    if ("id" in formState) {
      dispatch({
        type: ActionTypes.EDIT,
        payload: { id: formState.id, name, price: Number(price) },
      });
      return dispatch({
        type: ActionTypes.CLEAR_FORM,
      });
    }

    return dispatch({
      type: ActionTypes.ADD,
      payload: { id: uuid(), name, price: Number(price) },
    });
  }

  return (
    <form
      className="flex items-center gap-4"
      onSubmit={(e) => submitHandler(e)}
    >
      <input
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        name="name"
        placeholder="Введите название"
        value={"id" in formState ? formState.name : undefined}
        onChange={
          !("id" in formState)
            ? undefined
            : (e) =>
                dispatch({
                  type: ActionTypes.EXTRACT_TO_FORM,
                  payload: {
                    id: uuid(),
                    name: e.target.value,
                    price: formState.price,
                  },
                })
        }
        type="text"
        required
      />
      <input
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        name="price"
        placeholder="Введите цену"
        value={"id" in formState ? formState.price : undefined}
        onChange={
          !("id" in formState)
            ? undefined
            : (e) =>
                dispatch({
                  type: ActionTypes.EXTRACT_TO_FORM,
                  payload: {
                    id: uuid(),
                    price: e.target.value,
                    name: formState.name,
                  },
                })
        }
        type="text"
        required
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

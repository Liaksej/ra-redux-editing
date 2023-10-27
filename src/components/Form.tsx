import { useDispatch, useSelector } from "react-redux";
import { FormEvent, MutableRefObject, useEffect, useRef } from "react";
import { ActionTypes } from "@/redux/action";
import { v4 as uuid } from "uuid";
import { AppState, Product } from "@/redux/state";

export function Form() {
  const dispatch = useDispatch();
  const state = useSelector((state: AppState) => state.list);

  const nameInput: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const priceInput: MutableRefObject<HTMLInputElement | null> = useRef(null);

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const price = data.get("price");

    if (nameInput.current && priceInput.current) {
      nameInput.current.value = "";
      priceInput.current.value = "";
    }

    if (state.editId) {
      return dispatch({
        type: ActionTypes.EDIT,
        payload: { id: state.editId, name, price: Number(price) },
      });
    }

    return dispatch({
      type: ActionTypes.ADD,
      payload: { id: uuid(), name, price: Number(price) },
    });
  }

  useEffect(() => {
    if (state.editId) {
      if (nameInput.current && priceInput.current) {
        nameInput.current.value = state.products.find(
          (product: Product) => product.id === state.editId,
        ).name;
        priceInput.current.value = state.products.find(
          (product: Product) => product.id === state.editId,
        ).price;
      }
    }
  }, [state.editId, state.products]);

  return (
    <form
      className={`w-fit flex p-2 items-center gap-4 rounded-xl ${
        Boolean(state.editId) && "bg-yellow-500"
      }`}
      onSubmit={(e) => submitHandler(e)}
    >
      <input
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        name="name"
        ref={nameInput}
        placeholder="Введите название"
        type="text"
        required
      />
      <input
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        name="price"
        ref={priceInput}
        placeholder="Введите цену"
        type="text"
        required
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
        type="submit"
      >
        {state.editId ? "Edit" : "Save"}
      </button>
    </form>
  );
}

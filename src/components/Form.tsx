import { useDispatch, useSelector } from "react-redux";
import { FormEvent, MutableRefObject, useEffect, useRef } from "react";
import { ActionTypes } from "@/redux/action";
import { v4 as uuid } from "uuid";
import { AppState, Product } from "@/redux/state";

export function Form() {
  const dispatch = useDispatch();
  const products = useSelector((state: AppState) => state.list);
  const { editId } = useSelector((state: AppState) => state.list);

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
      dispatch({ type: ActionTypes.FILTER, payload: "" });
    } else {
      throw new Error(`There is no inputs`);
    }

    if (products.editId) {
      return dispatch({
        type: ActionTypes.EDIT,
        payload: { id: products.editId, name, price: Number(price) },
      });
    }

    return dispatch({
      type: ActionTypes.ADD,
      payload: { id: uuid(), name, price: Number(price) },
    });
  }

  useEffect(() => {
    if (products.editId) {
      if (nameInput.current && priceInput.current) {
        nameInput.current.value = products.products.find(
          (product: Product) => product.id === products.editId,
        ).name;
        priceInput.current.value = products.products.find(
          (product: Product) => product.id === products.editId,
        ).price;
      } else {
        throw new Error(`There is no inputs`);
      }
    }
  }, [products.editId, products.products]);

  return (
    <form
      className={`w-full flex p-2 justify-between items-end gap-4 rounded-xl ${
        Boolean(products.editId) && "bg-yellow-500"
      }`}
      onSubmit={(e) => submitHandler(e)}
    >
      <div className="w-2/3 flex flex-col">
        <label htmlFor="name" className="text-xs p-1">
          *Поиск
        </label>
        <input
          className="w-fullpx-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          name="name"
          id="name"
          placeholder="Введите название"
          type="text"
          onChange={(e) =>
            Boolean(editId) ||
            dispatch({ type: ActionTypes.FILTER, payload: e.target.value })
          }
          required
        />
      </div>
      <input
        className="w-1/4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        name="price"
        placeholder="Введите цену"
        type="text"
        required
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
        type="submit"
      >
        {products.editId ? "Edit" : "Save"}
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-white px-4 py-2 rounded-md transition duration-300"
        type="button"
        onClick={() => {
          if (nameInput.current && priceInput.current) {
            nameInput.current.value = "";
            priceInput.current.value = "";
          }
        }}
      >
        Clear
      </button>
    </form>
  );
}

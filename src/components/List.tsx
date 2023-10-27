import { useDispatch, useSelector } from "react-redux";
import { AppState, Product } from "@/redux/state";
import { ActionTypes } from "@/redux/action";

export function List() {
  const listState = useSelector((state: AppState) => state.list);
  const dispatch = useDispatch();

  function editHandler(item: Product) {
    return dispatch({ type: ActionTypes.EXTRACT_TO_FORM, payload: item.id });
  }

  if (listState.products.length < 1) {
    return null;
  }

  return (
    <ul className="w-full">
      {listState.products.map((item: Product) => (
        <li className="list-disc" key={item.id}>
          <span>{item.name}</span> - <span>{String(item.price)}</span>
          <button
            type="button"
            onClick={() => editHandler(item)}
            className="ml-2 bg-yellow-500 hover:bg-green-600 text-white px-2 rounded-md transition duration-300"
          >
            I
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch({ type: ActionTypes.REMOVE, payload: { id: item.id } });
            }}
            className="ml-2 bg-red-500 hover:bg-red-600 text-white px-1 rounded-md transition duration-300"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

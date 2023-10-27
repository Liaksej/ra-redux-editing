import { useDispatch, useSelector } from "react-redux";
import { AppState, Product } from "@/redux/state";
import { ActionTypes } from "@/redux/action";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { productFilteredSelector } from "@/redux/appReducer";

export function List() {
  const listState = useSelector(productFilteredSelector);
  const dispatch = useDispatch();

  function editHandler(item: Product) {
    return dispatch({ type: ActionTypes.EXTRACT_TO_FORM, payload: item.id });
  }

  if (listState.length < 1) {
    return null;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-2/3 text-left">Название</TableHead>
          <TableHead className="w-1/4">Цена</TableHead>
          <TableHead className="text-right">Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listState.map((item: Product) => (
          <TableRow key={item.id}>
            <TableCell className="w-2/3 overflow-auto">{item.name}</TableCell>
            <TableCell>{String(item.price)}</TableCell>
            <TableCell className="text-center flex gap-0.5">
              <Button
                variant="outline"
                size="icon"
                type="button"
                onClick={() => editHandler(item)}
              >
                <Image
                  src="/edit_FILL0_wght400_GRAD0_opsz24.svg"
                  width={20}
                  height={20}
                  alt={item.id}
                />
              </Button>
              <Button
                variant="outline"
                size="icon"
                type="button"
                onClick={() => {
                  dispatch({
                    type: ActionTypes.REMOVE,
                    payload: { id: item.id },
                  });
                }}
              >
                <Image
                  src="/delete_FILL0_wght400_GRAD0_opsz24.svg"
                  width={20}
                  height={20}
                  alt={item.id}
                />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

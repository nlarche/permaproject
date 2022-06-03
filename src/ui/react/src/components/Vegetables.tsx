import { useCallback, useEffect, useState } from "react";
import { ListVegetablesQuery } from "../../../../domain/query/ListVegetablesQuery";
import { Vegetable } from "../../../../domain/model/Vegetable";
import VegetableForm from "./VegetableForm";
import { vegetableRepository } from "./repository";
import { RemoveVegetable } from "../../../../domain/command/RemoveVegetable";

function useVegetableList() {
  const [list, setList] = useState([] as Vegetable[]);
  const effect = useCallback(() => {
    function load() {
      console.log("reload list");
      new ListVegetablesQuery(vegetableRepository)
        .execute(undefined)
        .then((list) => setList(list));
    }

    load();
  }, []);
  return [list, effect] as const;
}

export default function Vegetables() {
  const [list, reload] = useVegetableList();
  useEffect(() => {
    reload();
  }, []);

  function remove(v: Vegetable) {
    new RemoveVegetable(vegetableRepository).execute(v.id);
    reload();
  }

  return (
    <>
      <VegetableForm onAdd={reload}></VegetableForm>
      <ul>
        {list.map((v) => (
          <li key={v.id.id}>
            {v.id.id} - {v.name}
            <button onClick={() => remove(v)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

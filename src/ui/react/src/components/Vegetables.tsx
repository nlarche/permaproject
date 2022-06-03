import { useEffect, useState } from "react";
import { Vegetable, VegetableId } from "../../../../domain/model/Vegetable";
import VegetableForm from "./VegetableForm";
import { handleCommand, handleQuery, pubsub } from "./repository";

function useVegetableList() {
  const [list, setList] = useState([] as Vegetable[]);

  useEffect(() => {
    function load() {
      handleQuery("ListVegetablesQuery", undefined).then((list) =>
        setList(list as Vegetable[])
      );
    }

    pubsub.subscribe("removed", load);
    pubsub.subscribe("added", load);
    load();
  }, []);
  return list;
}

export default function Vegetables() {
  const list = useVegetableList();

  function remove(v: Vegetable) {
    handleCommand<VegetableId>("RemoveVegetable", v.id);
  }

  return (
    <>
      <VegetableForm></VegetableForm>
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

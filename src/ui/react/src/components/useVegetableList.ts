import { useEffect, useState } from "react";
import { Vegetable } from "../../../../domain/model/Vegetable";
import { eventBus, handleQuery } from "../hexagone";

export default function useVegetableList() {
  const [list, setList] = useState([] as Vegetable[]);

  useEffect(() => {
    function load() {
      handleQuery("ListVegetablesQuery", undefined).then((list) =>
        setList(list as Vegetable[])
      );
    }

    eventBus.subscribe("removed", load);
    eventBus.subscribe("added", load);
    load();
  }, []);
  return list;
}

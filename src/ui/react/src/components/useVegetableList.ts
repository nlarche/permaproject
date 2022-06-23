import { useEffect, useState } from "react";
import { Vegetable } from "../../../../domain/model/Vegetable";
import { handleQuery, pubsub } from "./repository";

export default function useVegetableList() {
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

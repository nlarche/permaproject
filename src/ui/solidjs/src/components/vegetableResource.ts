import { eventBus, handleQuery } from "../hexagone";
import { Vegetable } from "../../../../domain/model/Vegetable";
import { createResource } from "solid-js";

export function createVegetableResource() {
  const [data, { mutate, refetch }] = createResource(() =>
    handleQuery<Vegetable[], undefined>("ListVegetablesQuery", undefined)
  );
  eventBus.subscribe("removed", refetch);
  eventBus.subscribe("added", refetch);

  return { vegetables: data };
}

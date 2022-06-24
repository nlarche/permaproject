import { eventBus, handleQuery } from "../hexagone";
import { createResource } from "solid-js";
import type { ListVegetablesQuery } from "../../../../domain/query/ListVegetablesQuery";

export function createVegetableResource() {
  const [data, { mutate, refetch }] = createResource(() =>
    handleQuery<ListVegetablesQuery>("ListVegetablesQuery", undefined)
  );
  eventBus.subscribe("removed", refetch);
  eventBus.subscribe("added", refetch);

  return { vegetables: data };
}

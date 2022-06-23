import { handleQuery } from "./repository";
import { Vegetable } from "../../../../domain/model/Vegetable";
import { createResource } from "solid-js";

export function createVegetableResource() {
  const [data, { mutate, refetch }] = createResource(() =>
    handleQuery<Vegetable[], undefined>("ListVegetablesQuery", undefined)
  );
  return { vegetables: data, mutate, refetch };
}

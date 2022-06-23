import { handleQuery, pubsub } from "./repository";
import { Vegetable } from "../../../../domain/model/Vegetable";
import { createResource } from "solid-js";

export function createVegetableResource() {
  const [data, { mutate, refetch }] = createResource(() =>
    handleQuery<Vegetable[], undefined>("ListVegetablesQuery", undefined)
  );
  pubsub.subscribe("removed", refetch);
  pubsub.subscribe("added", refetch);

  return { vegetables: data };
}

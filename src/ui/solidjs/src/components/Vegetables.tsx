import { Component, For } from "solid-js";
import VegetableItem from "./VegetableItem";
import { Vegetable } from "../../../../domain/model/Vegetable";
import { createVegetableResource } from "./vegetableResource";
import VegetableForm from "./VegetableForm";

const Vegetables: Component = () => {
  const { vegetables, refetch } = createVegetableResource();
  return (
    <>
      <VegetableForm refetch={refetch}></VegetableForm>
      <ul>
        <For each={vegetables()}>
          {(vegetable: Vegetable) => (
            <li>
              <VegetableItem vegetable={vegetable} refetch={refetch} />
            </li>
          )}
        </For>
      </ul>
    </>
  );
};

export default Vegetables;

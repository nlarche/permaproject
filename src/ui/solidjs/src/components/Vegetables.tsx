import { Component, For } from "solid-js";
import VegetableItem from "./VegetableItem";
import { Vegetable } from "../../../../domain/model/Vegetable";
import { createVegetableResource } from "./vegetableResource";
import VegetableForm from "./VegetableForm";

const Vegetables: Component = () => {
  const { vegetables } = createVegetableResource();
  return (
    <>
      <VegetableForm></VegetableForm>
      <ul>
        <For each={vegetables()}>
          {(vegetable: Vegetable) => (
            <li>
              <VegetableItem vegetable={vegetable} />
            </li>
          )}
        </For>
      </ul>
    </>
  );
};

export default Vegetables;

import { Component } from "solid-js";
import { Vegetable, VegetableId } from "../../../../domain/model/Vegetable";
import { handleCommand } from "./repository";

type VegetableComponentType = { vegetable: Vegetable };

const VegetableItem: Component<VegetableComponentType> = (
  props: VegetableComponentType
) => {
  function remove(v: Vegetable) {
    handleCommand<VegetableId>("RemoveVegetable", v.id);
  }

  const { vegetable } = props;
  return (
    <div>
      {vegetable.id.id} - {vegetable.name}
      <button onClick={() => remove(props.vegetable)}>X</button>
    </div>
  );
};

export default VegetableItem;

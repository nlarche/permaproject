import { Vegetable } from "../../../../domain/model/Vegetable";
import { handleCommand } from "../hexagone";
import type { RemoveVegetable } from "../../../../domain/command/RemoveVegetable";

type VegetableItemParams = { vegetable: Vegetable };
export default function VegetableItem(props: VegetableItemParams) {
  const { vegetable } = props;

  function remove(v: Vegetable) {
    handleCommand<RemoveVegetable>("RemoveVegetable", v.id);
  }

  return (
    <>
      {vegetable.id.id} - {vegetable.name}
      <button onClick={() => remove(vegetable)}>X</button>
    </>
  );
}

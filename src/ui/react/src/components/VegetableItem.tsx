import { Vegetable, VegetableId } from "../../../../domain/model/Vegetable";
import { handleCommand } from "./repository";

type VegetableItemParams = { vegetable: Vegetable };
export default function VegetableItem(props: VegetableItemParams) {
  const { vegetable } = props;

  function remove(v: Vegetable) {
    handleCommand<VegetableId>("RemoveVegetable", v.id);
  }

  return (
    <>
      {vegetable.id.id} - {vegetable.name}
      <button onClick={() => remove(vegetable)}>X</button>
    </>
  );
}

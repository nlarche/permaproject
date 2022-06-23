import VegetableForm from "./VegetableForm";
import VegetableItem from "./VegetableItem";
import useVegetableList from "./useVegetableList";

export default function Vegetables() {
  const list = useVegetableList();

  return (
    <>
      <VegetableForm></VegetableForm>
      <ul>
        {list.map((v) => (
          <li key={v.id.id}>
            <VegetableItem vegetable={v}></VegetableItem>
          </li>
        ))}
      </ul>
    </>
  );
}

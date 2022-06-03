import { FormEvent, useState } from "react";
import { Vegetable } from "../../../../domain/model/Vegetable";
import { AddVegetable } from "../../../../domain/command/AddVegetable";
import { vegetableRepository } from "./repository";

export default function VegetableForm({
  onAdd,
}: {
  onAdd: () => void;
}): JSX.Element {
  const [vegetable, setVegetable] = useState({ name: "" } as Vegetable);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    new AddVegetable(vegetableRepository).execute({
      name: vegetable.name,
    });
    setVegetable({ name: "" } as Vegetable);
    onAdd();
  }

  function onChange(e: FormEvent<HTMLInputElement>) {
    setVegetable({ name: e.currentTarget.value } as Vegetable);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input type="text" value={vegetable.name} onChange={onChange} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

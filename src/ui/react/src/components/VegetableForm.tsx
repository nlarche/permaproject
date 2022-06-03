import { FormEvent, useState } from "react";
import { Vegetable } from "../../../../domain/model/Vegetable";
import { handleCommand } from "./repository";

export default function VegetableForm(): JSX.Element {
  const [vegetable, setVegetable] = useState({ name: "" } as Vegetable);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    handleCommand("AddVegetable", {
      name: vegetable.name,
    });
    setVegetable({ name: "" } as Vegetable);
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

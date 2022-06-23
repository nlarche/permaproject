import { Component } from "solid-js";
import { Vegetable } from "../../../../domain/model/Vegetable";
import { createStore } from "solid-js/store";
import { handleCommand } from "./repository";

type VegetableForm = Pick<Vegetable, "name">;

const VegetableForm: Component = () => {
  const [vegetable, setVegetable] = createStore<VegetableForm>({ name: "" });

  function onSubmit(e: Event) {
    e.preventDefault();
    handleCommand("AddVegetable", {
      name: vegetable.name,
    });
    setVegetable({ name: "" } as Vegetable);
  }

  function onChange(e: Event) {
    setVegetable({
      name: (e.currentTarget as HTMLInputElement).value,
    } as Vegetable);
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
};

export default VegetableForm;

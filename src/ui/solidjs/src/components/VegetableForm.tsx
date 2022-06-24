import { Component, createSignal } from "solid-js";
import { Vegetable } from "../../../../domain/model/Vegetable";
import { createStore } from "solid-js/store";
import { eventBus, handleCommand } from "../hexagone";
import type { AddVegetable } from "../../../../domain/command/AddVegetable";

type VegetableForm = Pick<Vegetable, "name">;

const VegetableForm: Component = () => {
  const [vegetable, setVegetable] = createStore<VegetableForm>({ name: "" });
  const [error, setError] = createSignal("");

  eventBus.subscribe("error", (payload: any) => {
    setError(payload.message);
  });

  function onSubmit(e: Event) {
    e.preventDefault();
    handleCommand<AddVegetable>("AddVegetable", {
      name: vegetable.name,
    });
    setVegetable({ name: "" } as Vegetable);
    setError("");
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
        <p>{error()}</p>
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default VegetableForm;

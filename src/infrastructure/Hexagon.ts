import { VegetableRepository } from "../domain/model/Vegetable";
import { Command, EventBus, Query } from "../core";
import { ListVegetablesQuery } from "../domain/query/ListVegetablesQuery";
import { RemoveVegetable } from "../domain/command/RemoveVegetable";
import { AddVegetable } from "../domain/command/AddVegetable";

export type VegetableQueries = "ListVegetablesQuery";

export type VegetableCommands = "AddVegetable" | "RemoveVegetable";

export default function Hexagon(
  eventBus: EventBus,
  vegetableRepository: VegetableRepository
) {
  const domainQueries: Record<VegetableQueries, Query<unknown, unknown>> = {
    ListVegetablesQuery: new ListVegetablesQuery(vegetableRepository),
  };

  const domainCommands: Record<VegetableCommands, Command<unknown>> = {
    AddVegetable: new AddVegetable(vegetableRepository),
    RemoveVegetable: new RemoveVegetable(vegetableRepository),
  };

  function handleCommand<T>(command: VegetableCommands, params: T) {
    domainCommands[command].execute(params).then((r) => eventBus.dispatch(r));
  }

  async function handleQuery<T, P>(
    query: VegetableQueries,
    params: P
  ): Promise<T> {
    return (await domainQueries[query].execute(params)) as T;
  }

  return {
    eventBus,
    handleCommand,
    handleQuery,
  };
}

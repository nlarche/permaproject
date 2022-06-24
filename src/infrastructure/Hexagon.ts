import { VegetableRepository } from "../domain/model/Vegetable";
import { Command, EventBus, Query } from "../core";
import { ListVegetablesQuery } from "../domain/query/ListVegetablesQuery";
import { RemoveVegetable } from "../domain/command/RemoveVegetable";
import { AddVegetable } from "../domain/command/AddVegetable";
import { v4 as uuid } from "uuid";

export type VegetableQueries = "ListVegetablesQuery";

export type VegetableCommands = "AddVegetable" | "RemoveVegetable";

type CommandParams<T> = T extends Command<infer U> ? U : never;
type QueryParams<T> = T extends Query<infer P, infer R> ? P : never;
type QueryResponse<T> = T extends Query<infer P, infer R> ? R : never;

export default function Hexagon(
  eventBus: EventBus,
  vegetableRepository: VegetableRepository
) {
  const domainQueries: Record<VegetableQueries, Query<unknown, unknown>> = {
    ListVegetablesQuery: new ListVegetablesQuery(vegetableRepository),
  };

  const domainCommands: Record<VegetableCommands, Command<unknown>> = {
    AddVegetable: new AddVegetable(vegetableRepository, {
      getNewDate: () => new Date().getTime(),
      getNewId: () => uuid(),
    }),
    RemoveVegetable: new RemoveVegetable(vegetableRepository),
  };

  function handleCommand<T>(
    command: VegetableCommands,
    params: CommandParams<T>
  ) {
    domainCommands[command].execute(params).then((r) => eventBus.dispatch(r));
  }

  async function handleQuery<T>(
    query: VegetableQueries,
    params: QueryParams<T>
  ): Promise<QueryResponse<T>> {
    return (await domainQueries[query].execute(params)) as Promise<
      QueryResponse<T>
    >;
  }

  return {
    eventBus,
    handleCommand,
    handleQuery,
  };
}

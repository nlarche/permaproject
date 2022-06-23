import { StubVegetableRepository } from "../../../../infrastructure/vegetable/StubVegetableRepository";
import { Vegetable } from "../../../../domain/model/Vegetable";
import { Command, Query } from "../../../../core";
import { ListVegetablesQuery } from "../../../../domain/query/ListVegetablesQuery";
import { RemoveVegetable } from "../../../../domain/command/RemoveVegetable";
import { AddVegetable } from "../../../../domain/command/AddVegetable";
import { PubSub } from "../../../../core/pubSub";

export const pubsub = new PubSub();

export const vegetableRepository = new StubVegetableRepository([
  { name: "Tomate" },
  { name: "Salade" },
] as Vegetable[]);

export type VegetableQueries = "ListVegetablesQuery";

export type VegetableCommands = "AddVegetable" | "RemoveVegetable";

export const domainQueries: Record<
  VegetableQueries,
  Query<unknown, unknown>
> = {
  ListVegetablesQuery: new ListVegetablesQuery(vegetableRepository),
};

export const domainCommands: Record<VegetableCommands, Command<unknown>> = {
  AddVegetable: new AddVegetable(vegetableRepository),
  RemoveVegetable: new RemoveVegetable(vegetableRepository),
};

export function handleCommand<T>(command: VegetableCommands, params: T) {
  domainCommands[command].execute(params).then((r) => pubsub.dispatch(r));
}

export async function handleQuery<T, P>(
  query: VegetableQueries,
  params: P
): Promise<T> {
  return (await domainQueries[query].execute(params)) as T;
}

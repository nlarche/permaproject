import { StubVegetableRepository } from "../../infrastructure/vegetable/StubVegetableRepository";
import { GetVegetablesQuery } from "../../domain/query/GetVegetablesQuery";
import { AddVegetable } from "./AddVegetable";

describe("GetVegetablesQuery", () => {
  it("should return a list of vegetables", () => {
    const repo = new StubVegetableRepository();
    const command = new AddVegetable(repo);
    command.execute({ name: "Tomate" });
    expect(repo.list().length).toEqual(1);
  });
});

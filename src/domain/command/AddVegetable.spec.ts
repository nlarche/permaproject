import { StubVegetableRepository } from "../../infrastructure/vegetable/StubVegetableRepository";
import { AddVegetable } from "./AddVegetable";

describe("AddVegetable", () => {
  it("should add a vegetable", async () => {
    const repo = new StubVegetableRepository();
    const command = new AddVegetable(repo);
    command.execute({ name: "Tomate" });
    const list = await repo.list();
    expect(list.length).toEqual(1);
  });
});

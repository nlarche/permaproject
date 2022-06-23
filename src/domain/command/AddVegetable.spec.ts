import { StubVegetableRepository } from "../../infrastructure/vegetable/StubVegetableRepository";
import { AddVegetable } from "./AddVegetable";

describe("AddVegetable", () => {
  it("should add a vegetable", async () => {
    const repo = new StubVegetableRepository();
    const command = new AddVegetable(repo, {
      getNewDate: () => 1,
      getNewId: () => "1",
    });
    command.execute({ name: "Tomate" });
    const list = await repo.list();
    expect(list.length).toEqual(1);
    const addedVeggie = list[0];
    expect(addedVeggie.name).toEqual("Tomate");
    expect(addedVeggie.id).toEqual({ id: "1" });
    expect(addedVeggie.seedingDate).toEqual(1);
  });
});

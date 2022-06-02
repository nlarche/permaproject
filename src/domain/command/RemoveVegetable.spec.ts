import { StubVegetableRepository } from "../../infrastructure/vegetable/StubVegetableRepository";
import { Vegetable } from "../model/Vegetable";
import { RemoveVegetable } from "./RemoveVegetable";

describe("Remove vegetable", () => {
  it("should remove a vegetable", async () => {
    let vegetables = [
      { name: "Tomate" },
      { name: "Carotte" },
      { name: "Salade" },
    ];
    const repo = new StubVegetableRepository(vegetables as Vegetable[]);
    const command = new RemoveVegetable(repo);
    command.execute({ id: 1 });
    const list = await repo.list();
    expect(list.length).toEqual(2);

    try {
      await repo.get({ id: 1 });
      fail();
    } catch (e) {
      expect(e).toBeDefined();
    }
  });
});

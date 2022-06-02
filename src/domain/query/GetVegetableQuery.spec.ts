import { StubVegetableRepository } from "../../infrastructure/vegetable/StubVegetableRepository";
import { Vegetable } from "../model/Vegetable";
import { GetVegetableQuery } from "./GetVegetableQuery";

describe("GetVegetablesQuery", () => {
  it("should return a specific vegetables", async () => {
    let vegetables = [{ name: "Tomate" }, { name: "Carotte" }];
    const repo = new StubVegetableRepository(vegetables as Vegetable[]);
    const query = new GetVegetableQuery(repo);
    const vegetable = await query.execute({ id: 0 });
    expect(vegetable.name).toEqual("Tomate");
  });
});

import { StubVegetableRepository } from "../../infrastructure/vegetable/StubVegetableRepository";
import { ListVegetablesQuery } from "../../domain/query/ListVegetablesQuery";
import { Vegetable } from "../model/Vegetable";

describe("GetVegetablesQuery", () => {
  it("should return a list of vegetables", async () => {
    let vegetables = [
      { id: { id: "0" }, name: "Tomate" },
      { id: { id: "1" }, name: "Carotte" },
    ];
    const repo = new StubVegetableRepository(vegetables as Vegetable[]);
    const query = new ListVegetablesQuery(repo);
    const list = await query.execute(undefined);
    expect(list.length).toEqual(2);
  });
});

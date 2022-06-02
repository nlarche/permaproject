import { StubVegetableRepository } from "../../infrastructure/vegetable/StubVegetableRepository";
import { ListVegetablesQuery } from "../../domain/query/ListVegetablesQuery";
import { Vegetable } from "../model/Vegetable";

describe("GetVegetablesQuery", () => {
  it("should return a list of vegetables", async () => {
    let vegetables = [{ name: "Tomate" }, { name: "Carotte" }];
    const repo = new StubVegetableRepository(vegetables as Vegetable[]);
    const query = new ListVegetablesQuery(repo);
    const list = await query.execute(undefined);
    expect(list.length).toEqual(2);
  });
});

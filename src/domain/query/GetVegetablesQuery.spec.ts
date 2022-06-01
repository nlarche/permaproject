import { StubVegetableRepository } from "../../infrastructure/vegetable/StubVegetableRepository";
import { GetVegetablesQuery } from "../../domain/query/GetVegetablesQuery";
import { Vegetable } from "../model/Vegetable";

describe("GetVegetablesQuery", () => {
  it("should return a list of vegetables", () => {
    let vegetables = [{ name: "Tomate" }, { name: "Carotte" }];
    const repo = new StubVegetableRepository(vegetables as Vegetable[]);
    const query = new GetVegetablesQuery(repo);
    expect(query.execute(undefined).length).toEqual(2);
  });
});

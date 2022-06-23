import { StubVegetableRepository } from "../../infrastructure/vegetable/StubVegetableRepository";
import { Vegetable } from "../model/Vegetable";
import { GetVegetableQuery } from "./GetVegetableQuery";

describe("GetVegetablesQuery", () => {
  let permaUtils = {
    getNewDate: () => 0,
    getNewId: () => "1",
  };

  it("should return a specific vegetables", async () => {
    let vegetables = [
      { id: { id: "0" }, name: "Tomate", seedingDate: 1 },
      { id: { id: "1" }, name: "Carotte", seedingDate: 10 },
    ];
    const repo = new StubVegetableRepository(vegetables as Vegetable[]);

    const query = new GetVegetableQuery(repo, permaUtils);
    const vegetable = await query.execute({ id: "0" });
    expect(vegetable.name).toEqual("Tomate");
    expect(vegetable.maturity).toEqual("JUVENILE");
  });

  it("should return GROWING vegetable", async () => {
    let vegetables = [{ id: { id: "0" }, name: "Tomate", seedingDate: 10 }];
    const repo = new StubVegetableRepository(vegetables as Vegetable[]);
    const query = new GetVegetableQuery(repo, permaUtils);
    const vegetable = await query.execute({ id: "0" });
    expect(vegetable.name).toEqual("Tomate");
    expect(vegetable.maturity).toEqual("GROWING");
  });

  it("should return READY vegetable", async () => {
    let vegetables = [{ id: { id: "0" }, name: "Tomate", seedingDate: 100 }];
    const repo = new StubVegetableRepository(vegetables as Vegetable[]);
    const query = new GetVegetableQuery(repo, permaUtils);
    const vegetable = await query.execute({ id: "0" });
    expect(vegetable.name).toEqual("Tomate");
    expect(vegetable.maturity).toEqual("READY");
  });

  it("should return DYING vegetable", async () => {
    let vegetables = [{ id: { id: "0" }, name: "Tomate", seedingDate: 150 }];
    const repo = new StubVegetableRepository(vegetables as Vegetable[]);
    const query = new GetVegetableQuery(repo, permaUtils);
    const vegetable = await query.execute({ id: "0" });
    expect(vegetable.name).toEqual("Tomate");
    expect(vegetable.maturity).toEqual("DYING");
  });

  it("should return DEAD vegetable", async () => {
    let vegetables = [{ id: { id: "0" }, name: "Tomate", seedingDate: 300 }];
    const repo = new StubVegetableRepository(vegetables as Vegetable[]);
    const query = new GetVegetableQuery(repo, permaUtils);
    const vegetable = await query.execute({ id: "0" });
    expect(vegetable.name).toEqual("Tomate");
    expect(vegetable.maturity).toEqual("DEAD");
  });
});

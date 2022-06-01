import {Land} from "./domain";

describe('Visualize cultivation land', () => {
  it("should contains a list of parcels", () => {
    const cultureLand = new Land()
    expect(cultureLand.parcels).toEqual([])
  })
  it("should add a new parcel", () => {
    const cultureLand: Land = new Land()
    expect(cultureLand.addParcel({ name: 'parcel a'})).toEqual([{name: 'parcel a'}])
  })
})
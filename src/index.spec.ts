import {Land} from "./domain";

describe('Visualize cultivation land', () => {
  it("should contains a list of parcels", () => {
    const cultureLand: Land = {
      parcels :[{name: 'parcel a'}]
    }
    expect(cultureLand.parcels).toEqual([{name: 'parcel a'}])
  })
})
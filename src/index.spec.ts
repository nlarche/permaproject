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

  it("should remove a parcel", () => {
    const cultureLand: Land = new Land()
    cultureLand.addParcel({ name: 'parcel a'})
    cultureLand.addParcel({ name: 'parcel b'})
    expect(cultureLand.parcels.length).toEqual(2)
    cultureLand.removeParcel({ name: 'parcel a'})
    expect(cultureLand.parcels).toEqual([{name: 'parcel b'}])
    expect(cultureLand.parcels.length).toEqual(1)
  })
})
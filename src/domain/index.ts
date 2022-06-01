import {Parcel} from "./Parcel";

export class Land {
    parcels: Parcel[] = []

    addParcel(parcel: Parcel): Parcel[] {
        this.parcels = [parcel, ...this.parcels]
        return this.parcels;
    }

    removeParcel(parcel: Parcel): Parcel[] {
        this.parcels = this.parcels.filter(p => p.name !== parcel.name)
        return this.parcels
    }
}
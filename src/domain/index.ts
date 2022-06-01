import {Parcel} from "./Parcel";

export class Land {
    parcels: Parcel[] = []

    addParcel(parcel: Parcel): Parcel[] {
        this.parcels = [parcel, ...this.parcels]
        return this.parcels;
    }
}
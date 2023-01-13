import { LightningElement, wire } from "lwc";
import getHouses from "@salesforce/apex/HouseServices.getRecords";

export default class HousingMap extends LightningElement {
  mapMarkers;
  error;

  @wire(getHouses)
  wiredHouses({ data }) {
    if (data) {
      console.log(data);
    }
  }
}

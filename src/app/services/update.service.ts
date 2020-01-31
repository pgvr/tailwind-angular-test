import { Injectable } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
@Injectable({
  providedIn: "root"
})
export class UpdateService {
  constructor(private swUpdate: SwUpdate) {
    this.swUpdate.available.subscribe(evt => {
      // an update is available, add some logic here.
      alert("An update is available. Press to reload.");
      window.location.reload();
    });
  }
}

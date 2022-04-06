import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  // counter: number;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onTimerStarted(counter: number) {
    // this.counter = counter;
    if (counter % 2 === 0) {
      this.evenNumbers.push(counter);
    } else {
      this.oddNumbers.push(counter);
    }
  }
}

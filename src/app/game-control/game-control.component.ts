import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() timerStarted = new EventEmitter<number>();
  @Output() timerStopped = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() {}

  ngOnInit(): void {}

  startTimer() {
    this.interval = setInterval(() => {
      this.timerStarted.emit(this.lastNumber++);
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
    this.lastNumber = 0;
  }
}

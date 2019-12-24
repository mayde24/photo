import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-two',
  templateUrl: './project-two.component.html',
  styleUrls: ['./project-two.component.scss']
})
export class ProjectTwoComponent implements OnInit {

  clicked2 = false;
  about = false;
  gone = false;
  time = false;
  index = 3;
  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
    setTimeout( () => {
      this.clicked2 = true;
    }, 1);
  }
  back() {
    this.clicked2 = false;
    setTimeout(() => {
      window.location.href = '/home';
    }, 1100);
  }
  right() {
    if (this.index < 9) {
      this.index = this.index + 2;
    }
  }
  left() {
    if (this.index > 3) {
      this.index = this.index - 2;
    }
  }
  aboutOpen() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.about = true;
    }, 500);
    setTimeout(() => {
      this.gone = true;
    }, 1500);
  }
  aboutClose() {
    this.time = true;
    this.gone = false;
    setTimeout( () => {
      this.about = false;
      this.time = false;
    }, 1000);
  }
}

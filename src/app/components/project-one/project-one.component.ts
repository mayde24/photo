import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-one',
  templateUrl: './project-one.component.html',
  styleUrls: ['./project-one.component.scss']
})
export class ProjectOneComponent implements OnInit {

  clicked1 = false;
  about = false;
  gone = false;
  time = false;
  index = 3;
  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
    setTimeout( () => {
      this.clicked1 = true;
    }, 1);
  }
  back() {
    this.clicked1 = false;
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

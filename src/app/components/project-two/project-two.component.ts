import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-project-two',
  templateUrl: './project-two.component.html',
  styleUrls: ['./project-two.component.scss']
})
export class ProjectTwoComponent implements OnInit, OnDestroy {

  clicked2 = false;
  about = false;
  gone = false;
  time = false;
  index = 3;
  constructor(public router: Router,
              public data: DataService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    if (this.data.lastProjectId == 2) {
      // @ts-ignore
      document.getElementById('video2').currentTime = this.data.timecode;
    }
    setTimeout( () => {
      this.clicked2 = true;
    }, 1);
    setTimeout( () => {
      this.data.hide = true;
    }, 100);
  }
  ngOnDestroy(): void {
    this.data.hide = false;
  }
  back() {
    window.scrollTo(0, 0);
    this.clicked2 = false;
    setTimeout(() => {
      // @ts-ignore
      this.data.timecode = document.getElementById('video2').currentTime;
      this.router.navigate([`/home`]);
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
  link() {
    this.data.lastProjectId = 3;
    this.data.timecode = 0;
    this.router.navigate([`/project3`]);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('myCarousel', {static: true}) carousel: NgbCarousel;
  about = false;
  time = false;
  timecode: number;
  timecodeSubscription: Subscription;

  constructor(public config: NgbCarouselConfig,
              public data: DataService,
              public router: Router) {}

  ngOnInit() {
    this.timecodeSubscription = this.data.timecodeSubject.subscribe(
      (timecode) => {
        this.timecode = timecode;
      }
    );
    this.data.emit();
    this.data.activeId = `project${this.data.lastProjectId}`;
    // @ts-ignore
    (document.getElementById('video1') as HTMLMediaElement).play();
    setTimeout(() => {
      // @ts-ignore
      document.getElementById(`stream${this.data.lastProjectId}`).currentTime = this.data.timecode;
    }, 1);
  }
  next() {
    this.carousel.next();
  }
  prev() {
    this.carousel.prev();
  }
  aboutOpen() {
    this.about = true;
  }
  aboutClose() {
    this.time = true;
    setTimeout( () => {
      this.about = false;
      this.time = false;
    }, 1000);
  }
  view(id: number) {
    // @ts-ignore
    this.data.timecode = document.getElementById(`video${id}`).currentTime;
    this.data.emit();
    this.data.lastProjectId = id;
    if (id == 1) {
      this.data.again1();
    } else if (id == 2) {
      this.data.again2();
    } else {
      this.data.again3();
    }
    this.data.show = id;
  }
}

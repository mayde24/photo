import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-project-two',
  templateUrl: './project-two.component.html',
  styleUrls: ['./project-two.component.scss']
})
export class ProjectTwoComponent implements OnInit, OnDestroy {
  @ViewChild('myCarousel', {static: true}) carousel: NgbCarousel;
  about = false;
  gone = false;
  time = false;
  index = 3;
  timecode: number;
  timecodeSubscription: Subscription;

  constructor(public router: Router,
              public data: DataService) {}

  ngOnInit() {
    this.timecodeSubscription = this.data.timecodeSubject.subscribe(
      (timecode) => {
        this.timecode = timecode;
      }
    );
    this.data.emit();
    window.scrollTo(0, 0);
    if (this.data.lastProjectId == 2) {
      // @ts-ignore
      document.getElementById('video2').currentTime = this.data.timecode;
    }
    setTimeout( () => {
      this.data.clicked2 = true;
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
    this.data.clicked2 = false;
    setTimeout(() => {
      // @ts-ignore
      this.data.timecode = document.getElementById('video2').currentTime;
      this.data.emit();
      this.data.again0();
      this.data.show = 0;
    }, 1000);
  }
  next() {
    this.carousel.next();
  }
  prev() {
    this.carousel.prev();
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
    this.data.emit();
    this.data.clicked2 = false;
    this.data.again3();
    this.data.show = 3;
  }
}

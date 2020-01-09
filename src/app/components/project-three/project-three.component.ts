import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-project-three',
  templateUrl: './project-three.component.html',
  styleUrls: ['./project-three.component.scss']
})
export class ProjectThreeComponent implements OnInit, OnDestroy {
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
    if (this.data.lastProjectId == 3 && this.data.largeur > 500) {
      // @ts-ignore
      document.getElementById('video3').currentTime = this.data.timecode;
    }
    setTimeout( () => {
      this.data.clicked3 = true;
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
    this.data.clicked3 = false;
    setTimeout(() => {
      if (this.data.largeur > 500) {
        // @ts-ignore
        this.data.timecode = document.getElementById('video3').currentTime;
        this.data.emit();
      }
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
    if (this.index < 7) {
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
    this.data.lastProjectId = 1;
    this.data.timecode = 0;
    this.data.emit();
    this.data.clicked3 = false;
    this.data.again1();
    this.data.show = 1;
  }
}

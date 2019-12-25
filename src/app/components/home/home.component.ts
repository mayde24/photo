import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('myCarousel', {static: true}) carousel: NgbCarousel;
  about = false;
  time = false;
  activeId: string;
  constructor(public config: NgbCarouselConfig,
              public data: DataService,
              public router: Router) {

  }

  ngOnInit() {
    this.activeId = `project${this.data.lastProjectId}`;
    setTimeout(() => {
      document.getElementById(`video${this.data.lastProjectId}`).currentTime = this.data.timecode;
    }, 50);
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
    this.data.lastProjectId = id;
    this.router.navigate([`/project${id}`]);
  }
}

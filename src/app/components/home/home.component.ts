import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../../services/data.service';
import {Router} from '@angular/router';
import set = Reflect.set;

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
      // @ts-ignore
      document.getElementById(`video${this.data.lastProjectId}`).currentTime = this.data.timecode;
    }, 50);
    setTimeout(() => {
      // @ts-ignore
      console.log('Current timecode of video : ' + document.getElementById(`video${this.data.lastProjectId}`).currentTime);
      console.log('Last timecode register : ' + this.data.timecode);
      console.log('Last project : ' + this.data.lastProjectId);
      console.log('Carousel actif : ' + this.activeId );
    }, 1500);
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('myCarousel', {static: true}) carousel: NgbCarousel;
  about = false;
  time = false;
  constructor(public config: NgbCarouselConfig) { }

  ngOnInit() {
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
}

import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  timecode = 0.0;
  timecodeSubject = new Subject<number>();
  lastProjectId: number = 1;
  hide: boolean = false;
  show: number = 0;
  clicked1: boolean = false;
  clicked2: boolean = false;
  clicked3: boolean = false;
  activeId: string = 'project1';
  largeur: number = window.innerWidth;

  constructor() {}


  again0() {
    this.activeId = `project${this.lastProjectId}`;
    setTimeout(() => {
      // @ts-ignore
      document.getElementById(`stream${this.lastProjectId}`).currentTime = this.timecode;
    }, 1);
  }
  again1() {
    window.scrollTo(0, 0);
    if (this.lastProjectId == 1) {
      // @ts-ignore
      document.getElementById('video1').currentTime = this.timecode;
    }
    setTimeout( () => {
      this.clicked1 = true;
    }, 1);
    setTimeout( () => {
      this.hide = true;
    }, 100);
  }
  again2() {
    window.scrollTo(0, 0);
    if (this.lastProjectId == 3) {
      // @ts-ignore
      document.getElementById('video2').currentTime = this.timecode;
    }
    setTimeout( () => {
      this.clicked2 = true;
    }, 1);
    setTimeout( () => {
      this.hide = true;
    }, 100);
  }
  again3() {
    window.scrollTo(0, 0);
    if (this.lastProjectId == 3) {
      // @ts-ignore
      document.getElementById('video3').currentTime = this.timecode;
    }
    setTimeout( () => {
      this.clicked3 = true;
    }, 1);
    setTimeout( () => {
      this.hide = true;
    }, 100);
  }
  emit() {
    this.timecodeSubject.next(this.timecode);
  }
}

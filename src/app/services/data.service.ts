import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  timecode = 0.0;
  lastProjectId: number = 1;
  hide: boolean = false;
  constructor() {}
}

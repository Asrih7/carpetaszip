import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  private eventSubject = new Subject<any>();

  publishSomeData(data: any) {
      this.eventSubject.next(data);
  }

  getObservable(): Subject<any> {
      return this.eventSubject;
  }
}

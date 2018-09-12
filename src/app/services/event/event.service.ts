import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventService {

  private listeners = [];

  constructor() { }

  emit(name: string, data: any) {
    this.listeners.forEach(listener => {
      if (listener.name === name && listener.fn) {
        listener.fn(data);
      }
    });
  }

  on(name: string, fn) {
    this.listeners.push({
      name, fn
    });
  }

}

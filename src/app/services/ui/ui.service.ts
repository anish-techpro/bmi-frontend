import { Injectable, HostListener } from '@angular/core';

import swal from 'sweetalert2';

@Injectable()
export class UiService {

  public showSidebar = true;

  private _loaderCounter = 0;
  get loaderState() {
    return this._loaderCounter !== 0;
  }

  public loader = {
    show: () => {
      console.log('loader_show');
      setTimeout(() => { this._loaderCounter++; }, 0);
    },
    hide: () => {
      console.log('loader_hide');
      setTimeout(() => { this._loaderCounter--; }, 0);
    }
  }

  public alert = {
    error: (message) => {
      swal('Oops!', message, 'error');
    }
  }

  constructor() { }

  getLoaderState() {
    return this._loaderCounter;
  }

}

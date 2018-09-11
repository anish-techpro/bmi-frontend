import { Injectable, HostListener } from '@angular/core';

import swal from 'sweetalert2';

@Injectable()
export class UiService {

  public showSidebar = true;

  private _loaderState = false;
  get loaderState() {
    return this._loaderState;
  }

  public loader = {
    show: () => setTimeout(() => { this._loaderState = true }, 0),
    hide: () => setTimeout(() => { this._loaderState = false }, 0),
    toggle: () => this._loaderState = !this._loaderState
  }

  public alert = {
    error: (message) => {
      swal('Oops!', message, 'error');
    }
  }

  constructor() { }

  getLoaderState() {
    return this._loaderState;
  }

}

import { Injectable, HostListener } from '@angular/core';

@Injectable()
export class UiService {

  public showSidebar = true;

  private _loaderState = false;
  get loaderState() {
    return this._loaderState;
  }

  public loader = {
    show: () => this._loaderState = true,
    hide: () => this._loaderState = false,
    toggle: () => this._loaderState = !this._loaderState
  }

  constructor() { }

}

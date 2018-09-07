import { Component } from '@angular/core';
import { Router, Event, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationStart, NavigationEnd } from '@angular/router';
import { UiService } from './services/ui/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public ui: UiService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.router.events.subscribe((event: Event) => {
    //   if (event instanceof NavigationStart) {
    //     this.ui.loader.show();
    //   } else if (event instanceof NavigationEnd) {
    //     this.ui.loader.hide();
    //   }
    // });
  }

}

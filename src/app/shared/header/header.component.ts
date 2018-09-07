import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui/ui.service';
import { UserService } from '../../services/user/user.service';
import { HelperService } from '../../services/helper/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private ui: UiService,
    public user: UserService,
    public helper: HelperService
  ) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.ui.showSidebar = !this.ui.showSidebar;
  }

}

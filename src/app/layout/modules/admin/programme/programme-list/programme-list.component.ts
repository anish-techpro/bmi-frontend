import { Component, OnInit } from '@angular/core';
import { UiService } from '../../../../../services/ui/ui.service';
import { AdminService } from '../../services/admin/admin.service';
import { ProgrammeService } from '../../services/programme/programme.service';

interface IProgramme {
  name: string;
  modules: any[];
  created_at: Date;
}

@Component({
  selector: 'app-programme-list',
  templateUrl: './programme-list.component.html',
  styleUrls: ['./programme-list.component.css'],
  providers: [ProgrammeService]
})
export class ProgrammeListComponent implements OnInit {

  public programmes = [];
  public showLoadMore = false;

  private page = 1;

  constructor(
    private ui: UiService,
    private programmeService: ProgrammeService
  ) { }

  ngOnInit() {
    this.getProgrammes();
  }

  getProgrammes() {
    this.ui.loader.show();
    this.programmeService.get(this.page, (err, res) => {
      this.ui.loader.hide();
      if (!err) {
        this.programmes = [...this.programmes, ...res.data];
        this.page = this.page + 1;
        this.showLoadMore = res.current_page !== res.last_page;
      }
    });
  }

}

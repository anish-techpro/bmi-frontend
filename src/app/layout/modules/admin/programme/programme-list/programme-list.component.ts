import { Component, OnInit } from '@angular/core';

interface IProgramme {
  name: string;
  modules: number;
  createdAt: Date;
}

@Component({
  selector: 'app-programme-list',
  templateUrl: './programme-list.component.html',
  styleUrls: ['./programme-list.component.css']
})
export class ProgrammeListComponent implements OnInit {

  public programmes: IProgramme[] = [];

  constructor() { }

  ngOnInit() {
    this.getProgrammes();
  }

  private getProgrammes() {
    this.programmes = [
      {
        name: 'BMI Executive MBA',
        modules: 20,
        createdAt: new Date('07-10-2001')
      },
      {
        name: 'BMI Leadership',
        modules: 22,
        createdAt: new Date('07-10-2008')
      },
      {
        name: 'BMI Innovation',
        modules: 36,
        createdAt: new Date('07-10-2003')
      }
    ];
  }

}

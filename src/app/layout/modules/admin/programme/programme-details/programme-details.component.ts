import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-programme-details',
  templateUrl: './programme-details.component.html',
  styleUrls: ['./programme-details.component.css']
})
export class ProgrammeDetailsComponent implements OnInit {

  public programmeId;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.programmeId = this.route.snapshot.paramMap.get('id');
  }

}

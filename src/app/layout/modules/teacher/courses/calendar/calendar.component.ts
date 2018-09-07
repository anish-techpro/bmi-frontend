import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public calendarOptions = null;

  constructor() {
    this.calendarOptions = {
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'today',
        //right: 'month,agendaWeek,agendaDay,listWeek'
      },
      defaultDate: '2018-08-01',
      navLinks: true, // can click day/week names to navigate views

      weekNumbers: true,
      weekNumbersWithinDays: true,
      weekNumberCalculation: 'ISO',

      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Exam',
          start: '2018-08-03',
          backgroundColor: '#3d5ca2',
          borderColor: '#3d5ca2'
        },
        {
          title: 'Lecture',
          start: '2018-08-06',
          end: '2018-08-08',
          backgroundColor: '#b2304d',
          borderColor: '#b2304d'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-03-09T16:00:00'
        },
        //{
        //          id: 999,
        //          title: 'Repeating Event',
        //          start: '2018-08-18T16:00:00'
        //        },
        {
          title: 'Project',
          start: '2018-08-10',
          end: '2018-08-12',
          backgroundColor: '#62bbab',
          borderColor: '#62bbab'
        },
        {
          title: 'Lecture',
          start: '2018-08-15T10:30:00',
          end: '2018-08-12T12:30:00',
          backgroundColor: '#b2304d',
          borderColor: '#b2304d'
        },
        {
          title: 'Lecture',
          start: '2018-08-15T12:00:00',
          backgroundColor: '#b2304d',
          borderColor: '#b2304d'
        },
        {
          title: 'Lecture',
          start: '2018-08-15T14:30:00',
          backgroundColor: '#b2304d',
          borderColor: '#b2304d'
        },
        {
          title: 'Lecture',
          start: '2018-08-15T17:30:00',
          backgroundColor: '#b2304d',
          borderColor: '#b2304d'
        },
        {
          title: 'Lecture',
          start: '2018-08-15T20:00:00',
          backgroundColor: '#b2304d',
          borderColor: '#b2304d'
        },
        // {
        //          title: 'Birthday Party',
        //          start: '2018-08-13T07:00:00'
        //        },
        //{
        //          title: 'Click for Google',
        //          url: 'http://google.com/',
        //          start: '2018-03-28'
        //        }
      ]
    };
  }

  ngOnInit() {
  }

}

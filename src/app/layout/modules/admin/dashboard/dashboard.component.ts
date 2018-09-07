import { Component, OnInit } from '@angular/core';
import { Options } from 'fullcalendar';

type MessageStatus = 'read' | 'unread' | 'draft' | 'spam';

interface IMessage {
  sender: string;
  date: string;
  text: string;
  status: MessageStatus;
};

interface GroupAnnouncement {
  title: string;
  createdAt: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public calendarOptions: Options;
  public messages: IMessage[] = [];
  public groupAnnouncements: GroupAnnouncement[] = [];

  constructor() { }

  ngOnInit() {
    this.setCalendarOptions();
    this.getMessages();
    this.getGroupAnnouncements();
  }

  private setCalendarOptions() {
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
      ]
    };
  }

  private getMessages() {
    this.messages = [
      {
        sender: 'Alex Jordan',
        date: '15 Nov 2016',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        status: 'unread'
      },
      {
        sender: 'Sylvain Guiheneuc',
        date: '12 Nov 2016',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        status: 'read'
      },
      {
        sender: 'Ales Krivec',
        date: '14 Nov 2016',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        status: 'draft'
      },
      {
        sender: 'Greg Rakozy',
        date: '10 Nov 2016',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        status: 'spam'
      }
    ];
  }

  private getGroupAnnouncements() {
    this.groupAnnouncements = [
      {
        title: 'BMI 4-Continent Executive MBA Class XIX officially ‘baptized’ into the BMI Family of 750 executives',
        createdAt: '30 mins ago'
      },
      {
        title: 'Finance experts share insights with BMI EMBA participants',
        createdAt: '1 hour ago'
      },
      {
        title: '"Why Profits are not Enough" Session',
        createdAt: '3 hours ago'
      }
    ];
  }

}

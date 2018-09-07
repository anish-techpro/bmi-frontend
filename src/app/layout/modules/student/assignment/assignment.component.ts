import { Component, OnInit } from '@angular/core';

type AssignmentStatus = 'submitted' | 'upload' | 'upcoming';

interface IAssignment {
    id: number;
    name: string;
    description: string;
    dueDate: string;
    status: AssignmentStatus
};

interface CourseAssignment {
    name: string;
    assignments: IAssignment[];
}

@Component({
    selector: 'app-assignment',
    templateUrl: 'assignment.component.html',
    styleUrls: ['assignment.component.css']
})
export class AssignmentComponent implements OnInit {

    public courses: CourseAssignment[] = [];

    public assignmentFilter = null;
    public assignmentFilters = {
        submitted: assignment => assignment.status === 'submitted',
        upcoming: assignment => assignment.status === 'upcoming'
    };

    constructor() { }

    ngOnInit() {
        this.getAssignments();
    }

    getAssignments() {
        this.courses = [
            {
                name: 'Accounting',
                assignments: [
                    {
                        id: 1,
                        name: 'Assignment 1',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        dueDate: '12nd March 2018',
                        status: 'submitted'
                    },
                    {
                        id: 2,
                        name: 'Assignment 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        dueDate: '14nd April 2018',
                        status: 'upload'
                    },
                    {
                        id: 3,
                        name: 'Assignment 3',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        dueDate: '15nd August 2018',
                        status: 'upcoming'
                    }
                ]
            },
            {
                name: 'Corporate Finance & Company Valuation',
                assignments: [
                    {
                        id: 1,
                        name: 'Assignment 1',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        dueDate: '12nd March 2018',
                        status: 'submitted'
                    },
                    {
                        id: 2,
                        name: 'Assignment 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        dueDate: '14nd April 2018',
                        status: 'upload'
                    },
                    {
                        id: 3,
                        name: 'Assignment 3',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        dueDate: '15nd August 2018',
                        status: 'upcoming'
                    }
                ]
            }
        ];
    }

    getButtonClass(status: AssignmentStatus) {
        switch (status) {
            case 'submitted': return 'an-btn-success';
            case 'upload': return 'an-btn-primary btn-file';
            case 'upcoming': return 'btn-default disabled';
        }
    }

    setAssignmentFilter(status) {
        this.assignmentFilter = status ? this.assignmentFilters[status] : null;
    }

}
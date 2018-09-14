import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventService } from '../../../../../../../services/event/event.service';
import { AdminService } from '../../../../services/admin/admin.service';
import { UiService } from '../../../../../../../services/ui/ui.service';

import swal from 'sweetalert2';
import * as moment from 'moment';

@Component({
    selector: 'app-edit-course-modal',
    templateUrl: './edit-course-modal.component.html',
    styleUrls: ['./edit-course-modal.component.css']
})
export class EditCourseModalComponent implements OnInit {

    @ViewChild('courseBtn') public courseBtn: ElementRef;
    @ViewChild('closeBtn') public closeBtn: ElementRef;
    @ViewChild('invitationCloseBtn') public invitationCloseBtn: ElementRef;

    public date: Date = new Date();

    public courseId = null;

    public course = null;
    public teacherList = [];
    public uploadedFiles = [];
    public exam = null;

    public examPayload = {
        updated: [],
        deleted: []
    };

    public page = 1;
    public currentPage = 0;
    public totalPages = 0;

    constructor(
        private event: EventService,
        private adminService: AdminService,
        private ui: UiService
    ) { }

    ngOnInit() {
        this.event.on('editCourse', courseId => {
            if (this.courseBtn) {
                this.courseBtn.nativeElement.click();
            }
            this.courseId = courseId;
            this.reset();
            this.setExam();
            this.getCourseDetails();
        });
    }

    setExam() {
        this.exam = {
            exam_name: '',
            start_date: new Date(),
            end_date: new Date()
        };
    }

    reset() {
        this.course = null;
        this.teacherList = [];
        this.totalPages = 0;
        this.currentPage = 0;
        this.page = 1;
    }

    getCourseDetails() {
        this.adminService.getCourseDetailsForEditing(this.courseId, (err, res) => {
            this.teacherList = res.teacherListData.data;
            this.totalPages = res.teacherListData.data.last_page;
            this.currentPage = res.teacherListData.data.current_page;
            this.page = 2;
            this.course = res.courseData;
            this.uploadedFiles = JSON.parse(this.course.course_files);
            // console.log(this.course);
        });
    }

    addCourseDocument(event) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            event.target.value = '';
            this.ui.loader.show();
            this.adminService.addCourseDocument(file, (err, res) => {
                this.ui.loader.hide();
                if (err) {
                    swal('Error!', err.file, 'warning');
                } else {
                    this.uploadedFiles.push(res.file);
                }
            });
        }
    }

    removeCourseDocument(index) {
        this.ui.loader.show();
        this.adminService.removeCourseDocument(this.uploadedFiles[index], (err, res) => {
            this.ui.loader.hide();
            if (err) {
                // TODO: implement error handler
            } else {
                this.uploadedFiles.splice(index, 1);
            }
        });
    }

    sendInvitationLink(email) {
        this.adminService.sendInvitationLinkToTeacher(email, (err, res) => {
            if (err) {
                // TODO: handler error
            } else {
                swal('Mail Sent!', 'Invitation mail sent to teacher', 'success');
                this.invitationCloseBtn.nativeElement.click();
            }
        });
    }

    addExam() {
        this.exam.error = null;
        if (this.exam.start_date > this.exam.end_date) {
            this.exam.error = 'Start Date should be less than End Date.';
            return;
        }
        this.exam.edited = true;
        this.examPayload.updated.push(this.exam);
        if (this.exam.id) {
            this.course.exam = this.course.exam.map(exam => {
                if (exam.id === this.exam.id) {
                    return this.exam;
                }
                return exam;
            });
        } else {
            this.course.exam.push(this.exam);
        }
        // this.course.exam.push(this.exam);
        this.setExam();
    }

    editExam(exam) {
        // if (this.exam.id) {
        //     this.course.exam.push(this.exam);
        // }
        this.exam = {
            ...exam
        };
        this.exam.start_date = this.exam.start_date || new Date();
        this.exam.end_date = this.exam.end_date || new Date();
        // this.course.exam = this.course.exam.filter(E => E !== exam);
        this.examPayload.updated = this.examPayload.updated.filter(E => E !== exam);
    }

    removeExam(index) {
        const exam = this.course.exam[index];
        if (exam.id) {
            this.examPayload.deleted.push(exam.id);
        }
        this.course.exam.splice(index, 1);
        this.examPayload.updated = this.examPayload.updated.filter(E => E !== exam);
    }

    saveCourse() {
        this.examPayload.updated = this.examPayload.updated.map(exam => {
            exam.start_date = moment(exam.start_date).format('YYYY-MM-DD HH:MM:SS');
            exam.end_date = moment(exam.end_date).format('YYYY-MM-DD HH:MM:SS');
            return exam;
        });
        const selectedTeacher = this.teacherList.reduce((result, teacher) => {
            if (teacher.selected) {
                result.push(teacher.id);
            }
            return result;
        }, []);
        const payload = {
            name: this.course.name,
            description: this.course.description,
            available_from: this.course.available_from,
            available_till: this.course.available_till,
            course_files: JSON.stringify(this.uploadedFiles),
            assign_teacher: selectedTeacher,
            exam: this.examPayload
        }
        this.adminService.updateCourse(this.course.id, payload, (err, res) => {
            if (err) {
                // TODO: handle error
                console.log(err);
            } else {
                console.log(res);
                this.event.emit('updateModuleList', true);
                swal('Success!', 'Course updated successfully.', 'success');
                this.closeBtn.nativeElement.click();
            }
        });
    }

}

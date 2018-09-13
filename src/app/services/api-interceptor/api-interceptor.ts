import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import swal from 'sweetalert2';
import { UiService } from "../ui/ui.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {


    constructor(
        private ui: UiService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('access_token');

        const contentType = req.headers.get('Content-Type') || 'application/json';
        let headers = req.headers;

        if (!headers.get('no-content-type')) {
            headers = headers.set('Content-Type', 'application/json');
        }

        if (token) {
            headers = headers.set('Authorization', 'Bearer ' + token);
        }

        req = req.clone({
            headers,
            url: 'http://192.168.1.59:8001/api' + req.url
        });
        return next.handle(req)
            .catch(err => {
                let errorObj = {};
                if (err instanceof HttpErrorResponse) {
                    const error = err.error;
                    if (error.message) {
                        swal('Oops!', error.message, 'error');
                    } else if (error.errmsg) {
                        const msg = error.errmsg;
                        if (typeof msg === 'string') {
                            swal(msg, '', 'warning');
                        } else {
                            Object.keys(msg).forEach(key => {
                                errorObj[key] = msg[key][0];
                            });
                        }
                    } else {
                        swal('Oops!', 'Something went wrong', 'error');
                    }
                }
                return Observable.throw(errorObj);
            });
    }
}

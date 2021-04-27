import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ErrorDialogComponent } from "../error-dialog/error-dialog.component";
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private dialog:MatDialog){}
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        return next.handle(req).pipe(
            catchError((error : HttpErrorResponse)=>{
                this.dialog.open(ErrorDialogComponent,{
                    data:{
                        message:error.error.message
                    }
                })
                return throwError(error);
            })
        )
    }

}
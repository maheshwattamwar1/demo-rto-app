import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { NotificationService } from './services/notification.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private notificationService: NotificationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          // console.log(event);
          // if(event.type == 0) {
          //   this.notificationService.showWarning("Error reaching backend server !!","");
          // }
          if (event instanceof HttpResponse) {
            if(event.status == 401) {
              alert('Unauthorized access!')
            }
          }
          return event;
        },
        error: (error) => {
          console.log(error);
          if(error.status == 0) {
            this.notificationService.showWarning("Error reaching backend server !!","");
          }
          if(error.status === 401) {
            alert('Unauthorized access!')
          }
          else if(error.status === 404) {
            alert('Page Not Found!')
          }
        }
      }));
  }
}

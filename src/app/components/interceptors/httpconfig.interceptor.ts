import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { ErrorDialogService } from '../shared/components/error-dialog/error-dialog.service';





@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(public errorDialogService: ErrorDialogService, public router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      //#region authentication
      // console.log("hello from interceptor");

      // request = request.clone({
      //   withCredentials: true,
      // });

        //   // Get the auth token from the service.
        //   const token = localStorage.getItem('token');
        //   // Clone the request and replace the original headers with
        //   // cloned headers, updated with the authorization.
        //       if (token) {
        //         request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        //     }

            // if (!request.headers.has('Content-Type')) {

            //   request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
            //     request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
            //  }

//#endregion


          // send cloned request with header to the next handler.
          return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {

                   // console.log('event--->>>', event);
                    // this.errorDialogService.openDialog(event);
                }
                return event;
            }),

            catchError((error: HttpErrorResponse) => {
              console.log('error from interceptor ', error);

              let data = {};
              // server side errors (return response from api)
              if (error.error)
                        {
                          console.log('api-side');
                          data = {
                                status: error.status,
                                reason: error.error.message
                            };
                            // switch(error.status){
                            //     case 401:
                            //       {
                            //         this.router.navigateByUrl("/errors/lock")
                            //       }
                            //     case 403:{
                            //       this.router.navigateByUrl("/errors/lock")
                            //     }
                            //     case 400:{

                            //     }
                            // }


                        }
                              else
                              {
                                      if (error.error instanceof ErrorEvent) {
                                        console.log('client-side');

                                          // Get client-side error
                                        data = {
                                              reason: error.error.message,
                                              status: error.status
                                          };
                                      } else {
                                          // Get server-side error
                                          console.log('server-side');

                                          data = {
                                              reason: error.url,
                                              status: error.statusText
                                          };
                                          // switch(error.status){
                                          //   case 404:{
                                          //    this.router.navigateByUrl("/errors/error-404")
                                          //   }
                                          // }
                                      }
                              }
                      // data = {
                      //     reason: error && error.error && error.error.reason ? error.error.reason : '',
                      //     status: error.status
                      // };
              this.errorDialogService.openDialog(data);
              return throwError(error);
                  }));

    }
  }


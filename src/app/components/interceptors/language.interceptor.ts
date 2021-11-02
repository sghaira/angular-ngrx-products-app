import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
 export class LanguageInterceptor implements HttpInterceptor {
   intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>> {
     //Multilanguages
     const lang=localStorage.getItem('lang')||'en'
      request=request.clone({
        setHeaders:{
          'Accept-Language':lang,
        }
      });
        return next.handle(request);
   }
 }
 

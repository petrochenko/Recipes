import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthService} from '../sevices/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Auth Interceptor', request);
    // const cloneRequest = request.clone({
    //  headers: request.headers.set('', '')
    // });
    const cloneRequest = request.clone({
      params: request.params.set('auth', this.authService.getToken())
    });
    return next.handle(cloneRequest);
  }
}

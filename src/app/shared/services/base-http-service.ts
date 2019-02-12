import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment.prod';
import {HttpOptionsModel} from '../models/http-options.model';

/**
 * Extend from this class in your data service to make api calls.
 *
 * This class and methods are generic to set return types..
 */
export abstract class BaseHttpService<T> {
  private readonly API_URL = environment.apiUrl;

  protected constructor(private readonly http: HttpClient) {
  }

  protected post<D>(url: string, body: D, options?: HttpOptionsModel): Observable<any> {
    return this.http.post<T>(this.API_URL + url, body, options);
  }

  protected get<D>(url: string, options?: HttpOptionsModel): Observable<T> {
    return this.http.get<T>(this.API_URL + url, options);
  }

  protected delete<D>(url: string, options?: HttpOptionsModel): Observable<T> {
    return this.http.delete<T>(this.API_URL + url, options);
  }

  protected put<D>(url: string, body: D, options?: HttpOptionsModel): Observable<T> {
    return this.http.put<T>(this.API_URL + url, body, options);
  }

  protected patch<D>(url: string, body: D, options?: HttpOptionsModel): Observable<T> {
    return this.http.patch<T>(this.API_URL + url, body, options);
  }
}

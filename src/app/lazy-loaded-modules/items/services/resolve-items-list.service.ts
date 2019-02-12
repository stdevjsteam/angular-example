import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {ItemService} from './items.service';
import {catchError, map} from 'rxjs/operators';

/**
 *One way to deal with getting and displaying data from an API is to route a user to a component,
 *
 *and then in that component’s ngOnInit hook call a method in a service to get the necessary data.
 *
 *While getting the data, perhaps the component can show a loading indicator.
 *
 *There’s another way however using what’s known as a route resolver, which allows you to get data before navigating to the new route.
 *
 * */
@Injectable()
export class ResolveItemsListService implements Resolve<any> {

  constructor(private itemsService: ItemService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    return this.itemsService.getItems().pipe(
      map(results => {
        if (results) {
          // you can do some staff here
          return of(results);
        } else {
          return EMPTY;
        }
      }), catchError((err) => {
        console.log(err);
        return EMPTY;
      })
    );
  }
}

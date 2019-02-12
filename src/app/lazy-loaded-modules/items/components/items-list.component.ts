import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Item, ItemService} from '../services/items.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html'
})
export class ItemsListComponent implements OnInit {
  items: Array<Item>;

  constructor(private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRouter.data.subscribe((data: {items: Observable<Item[]>}) => {
      if (data.items) {
        data.items.subscribe(response => {
          this.items = response;
        });
      }
    });
  }

}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItemsComponent} from './components/items.component';
import {ItemsListComponent} from './components/items-list.component';
import {ItemsDetailComponent} from './components/items-detail.component';
import {ItemService} from './services/items.service';
import {ItemsRoutingModule} from './items-routing.module';

@NgModule({
  imports: [CommonModule, ItemsRoutingModule],
  declarations: [ItemsComponent, ItemsDetailComponent, ItemsListComponent],
  providers: [ItemService]
})
export class ItemsModule {
}

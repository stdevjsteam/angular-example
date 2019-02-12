import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ItemsListComponent} from './components/items-list.component';
import {ItemsDetailComponent} from './components/items-detail.component';
import {ResolveItemsListService} from './services/resolve-items-list.service';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ItemsListComponent, resolve: {items: ResolveItemsListService}},
  {path: ':id', component: ItemsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ResolveItemsListService]
})
export class ItemsRoutingModule {
}

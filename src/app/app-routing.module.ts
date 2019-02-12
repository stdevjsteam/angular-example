import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

/**
 * Never directly import lazy loaded folders.
 *
 * Avoid allowing modules in sibling and parent folders to directly import a module in a lazy loaded feature.
 *
 * Why? Directly importing and using a module will load it immediately when the intention is to load it on demand.
 */
export const routes: Routes = [
  {path: '', redirectTo: 'contact', pathMatch: 'full'},
  {path: 'items', loadChildren: './lazy-loaded-modules/items/items.module#ItemsModule'},
  {path: 'customers', loadChildren: './lazy-loaded-modules/customers/customers.module#CustomersModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

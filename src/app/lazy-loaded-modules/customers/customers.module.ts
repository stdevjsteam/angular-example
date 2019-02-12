import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';

import {CustomersComponent} from './components/customers.component';
import {CustomersDetailComponent} from './components/customers-detail.component';
import {CustomersListComponent} from './components/customers-list.component';
import {CustomersRoutingModule} from './customers-routing.module';
import {CustomerServiceModule} from './customer-service.module';

@NgModule({
  imports: [
    SharedModule,
    CustomersRoutingModule,
    CustomerServiceModule
  ],
  declarations: [
    CustomersComponent, CustomersDetailComponent, CustomersListComponent,
  ],
  providers: []
})
export class CustomersModule {
}

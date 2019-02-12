import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import {ContactComponent} from './components/contact.component';
import {ContactRoutingModule} from './contact-routing.module';
import {ContactServiceModule} from './contact-service.module';

@NgModule({
    imports: [
        SharedModule,
        ContactRoutingModule,
        ContactServiceModule
    ],
    declarations: [ContactComponent],
    providers: []
})
export class ContactModule {
}

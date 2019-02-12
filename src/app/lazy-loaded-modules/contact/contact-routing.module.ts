import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ContactComponent} from './components/contact.component';

const routes = [
    {path: 'contact', component: ContactComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule {
}

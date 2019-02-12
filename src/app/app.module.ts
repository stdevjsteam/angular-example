import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
/* App Root */
import {AppComponent} from './app.component';
/* Feature Modules */
import {ContactModule} from './lazy-loaded-modules/contact/contact.module';
import {CoreModule} from './core/core.module';
/* Routing Module */
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    ContactModule,
    CoreModule.forRoot({userName: 'Angular Developer'}),
    AppRoutingModule
  ],
  providers: [],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

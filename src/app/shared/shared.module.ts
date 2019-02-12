import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AwesomePipe} from './pipes/awesome.pipe';
import {HighlightDirective} from './directives/highlight.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [AwesomePipe, HighlightDirective],
  exports: [
    AwesomePipe,
    HighlightDirective,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}

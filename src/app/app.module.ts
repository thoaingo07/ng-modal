import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { LeadListComponent } from './leads/components/lead-list/lead-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeadEditComponent } from './leads/components/lead-edit/lead-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    LeadListComponent,
    LeadEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

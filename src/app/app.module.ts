import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from "./server/server.component";

import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DangerAlertComponent } from './danger-alert/danger-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ParentComponentComponent,
    SuccessAlertComponent,
    DangerAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { ParentComponentComponent } from './parent-component/parent-component.component';
// import { SuccessAlertComponent } from './success-alert/success-alert.component';
// import { DangerAlertComponent } from './danger-alert/danger-alert.component';
import { InputComponent } from "./components/input/input.component";
import { ListComponent } from "./components/list/list.component";

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

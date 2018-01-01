import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertmessagesComponent } from './alertmessages/alertmessages.component';
import { SuccessalertComponent } from './alertmessages/successalert/successalert.component';
import { ErroralertComponent } from './alertmessages/erroralert/erroralert.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertmessagesComponent,
    SuccessalertComponent,
    ErroralertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

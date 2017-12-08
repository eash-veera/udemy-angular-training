import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//^its important that you import necessary modules here, since typescript checks for dependancy
 
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //also add the module name here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

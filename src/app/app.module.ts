import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyservService } from './myserv.service';
import { ComponeComponent } from './compone/compone.component';
import { ComptwoComponent } from './comptwo/comptwo.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponeComponent,
    ComptwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MyservService],
  bootstrap: [AppComponent]
})
export class AppModule { }

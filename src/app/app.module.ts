import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { SystimeComponent } from './systime/systime.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    SystimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

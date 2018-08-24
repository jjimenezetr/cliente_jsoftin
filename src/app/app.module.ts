import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { UiModule } from './ui/ui.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './ui/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    NgbModule.forRoot(),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




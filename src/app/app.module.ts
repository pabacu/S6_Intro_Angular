import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppEscenaComponent } from './components/app-escena/app-escena.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppEscenaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

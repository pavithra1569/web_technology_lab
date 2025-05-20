import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  // AppComponent is standalone in your case

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]  // Just include AppComponent here as the root component
})
export class AppModule { }

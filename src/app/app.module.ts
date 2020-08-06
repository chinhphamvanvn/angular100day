import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './components/home/home.module';
import { HeroModule } from './components/hero/hero.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiSmartService } from './services/apismart.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HeroModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ApiSmartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

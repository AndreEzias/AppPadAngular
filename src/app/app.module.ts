import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ConfigurationsModule } from './configurations/configurations.module';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ConfigurationsModule,
    HomeModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

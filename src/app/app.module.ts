import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app-routing-module';
import { HomeComponent } from './home/home.component';
import { MemberSearchComponent } from './member-search/member-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MemberSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { ScrollingModule } from '@angular/cdk/scrolling';  
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InterventionsComponent } from './components/interventions/interventions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InterventionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // ScrollingModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CrypdataService } from './crypdata.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { CurrdetailComponent } from './currdetail/currdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    CurrdetailComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    CommonModule,
  ],
  entryComponents: [
    TableComponent,
  ],
  providers: [CrypdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

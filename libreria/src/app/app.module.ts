import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BooksService } from './books.service';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [BrowserModule,FormsModule,AppRoutingModule],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

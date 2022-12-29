import { Component, NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomPipe1Pipe } from './Pipes/custom-pipe-1.pipe';
import { HeaderComponent } from './header/header.component';
import { ToUpPipe } from './Pipes/to-up.pipe';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe1Pipe,
    HeaderComponent,
    ToUpPipe,
    ProductsComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ErefExampleComponent } from './layout/eref-example/eref-example.component';
import { TrefExampleComponent } from './layout/tref-example/tref-example.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ErefExampleComponent,
    TrefExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

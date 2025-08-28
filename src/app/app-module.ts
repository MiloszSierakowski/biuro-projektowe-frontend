import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppRoutingModule} from './app-routing-module';
import {AppComponent} from './app';
import {SidebarComponent} from './shared/components/sidebar/sidebar';
import {HeaderComponent} from './shared/components/header/header';
import {ToolbarComponent} from './shared/components/toolbar/toolbar';
import {AgreementsComponent} from './features/agreements/pages/agreements';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ToolbarComponent,
    AgreementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

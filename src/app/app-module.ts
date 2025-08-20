import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import {AppRoutingModule} from './app-routing-module';
import {AppComponent} from './app';
import {SidebarComponent} from './components/sidebar/sidebar';
import {HeaderComponent} from './components/header/header';
import {ToolbarComponent} from './shared/components/toolbar/toolbar';
import {AgreementsComponent} from './components/pages/agreements/agreements';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

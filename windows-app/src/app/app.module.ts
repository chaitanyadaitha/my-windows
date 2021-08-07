import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterWindowsIconComponent } from './components/FooterComponents/footer-windows-icon/footer-windows-icon.component';
import { FooterSerachBarComponent } from './components/FooterComponents/footer-serach-bar/footer-serach-bar.component';
import { FooterAppsListComponent } from './components/FooterComponents/footer-apps-list/footer-apps-list.component';
import { FooterActionToggleComponent } from './components/FooterComponents/footer-action-toggle/footer-action-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterWindowsIconComponent,
    FooterSerachBarComponent,
    FooterAppsListComponent,
    FooterActionToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

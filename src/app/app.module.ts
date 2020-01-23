import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import {routes} from './side-bar/side-bar-routing.module'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NavbarComponent,
    SideBarComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {
  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
    const myCustomElement = createCustomElement(NavbarComponent, { injector: this.injector });
    customElements.define('component-rr-navbar', myCustomElement);

    const SideBarElement = createCustomElement(SideBarComponent, { injector: this.injector });
    customElements.define('component-rr-sidebar', SideBarElement);
  }
}

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ListaproductosComponent } from './components/listaproductos.component/listaproductos.component';
import { appRoutingProvider, routing } from './app.routing';
import { MenuComponent } from './components/menu.component/menu.component';
import { HijococheComponent } from './components/hijocoche.component/hijocoche.component';
import { PadrecochesComponent } from './components/padrecoches.component/padrecoches.component';
import { PadredeportesComponent } from './components/padredeportes.component/padredeportes.component';

@NgModule({
  declarations: [
    App,
    ListaproductosComponent,
    MenuComponent,
    HijococheComponent,
    PadrecochesComponent,
    PadredeportesComponent
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }

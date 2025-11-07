import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ListaproductosComponent } from './components/listaproductos.component/listaproductos.component';
import { appRoutingProvider, routing } from './app.routing';
import { MenuComponent } from './components/menu.component/menu.component';
import { HijococheComponent } from './components/hijocoche.component/hijocoche.component';
import { PadrecochesComponent } from './components/padrecoches.component/padrecoches.component';
import { PadredeportesComponent } from './components/padredeportes.component/padredeportes.component';
import { HijodeporteComponent } from './components/hijodeporte.component/hijodeporte.component';
import { LibreriaComponent } from './components/libreria.component/libreria.component';
import { ComicComponent } from './components/comic.component/comic.component';
import { FormsModule } from '@angular/forms';
import { ServiceComics } from './services/service.comics';

@NgModule({
  declarations: [
    App,
    ListaproductosComponent,
    MenuComponent,
    HijococheComponent,
    PadrecochesComponent,
    PadredeportesComponent,
    HijodeporteComponent,
    LibreriaComponent,
    ComicComponent,
  ],
  imports: [
    BrowserModule,routing,FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),appRoutingProvider,ServiceComics
  ],
  bootstrap: [App]
})
export class AppModule { }

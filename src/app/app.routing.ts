import { ListaproductosComponent } from "./components/listaproductos.component/listaproductos.component";
//NECESITAMOS UNA SERIE DE MODULOS QUE SE ENCUENTRAN DENTRO DE ANGULAR ROUTER
import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HijococheComponent } from "./components/hijocoche.component/hijocoche.component";
import { PadrecochesComponent } from "./components/padrecoches.component/padrecoches.component";
import { PadredeportesComponent } from "./components/padredeportes.component/padredeportes.component";
import { LibreriaComponent } from "./components/libreria.component/libreria.component";

const appRoutes:Routes=[
    {path:"",component:ListaproductosComponent},
    {path:"padre",component:PadrecochesComponent},
    {path:"padredeporte",component:PadredeportesComponent},
    {path:"libreria",component:LibreriaComponent},
]

export const appRoutingProvider:any[]=[];
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);

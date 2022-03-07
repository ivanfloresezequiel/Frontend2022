import{ NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ngModuleJitUrl } from '@angular/compiler';
import { RouterModule } from '@angular/router';
import { ProductoComponent } from './producto.component';
import { productoRoutingModule } from './producto-routing.module';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';




@NgModule({
    declarations:[
    ProductoComponent,
    ListarComponent,
    EditarComponent,
    ],
imports:[
    CommonModule,productoRoutingModule
]})
export class productoModule{}
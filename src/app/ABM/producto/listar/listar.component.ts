
import { Component, OnInit } from '@angular/core';


import {Router} from '@angular/router';

import { producto } from 'src/app/Modelo/producto';
import { ProductoService } from 'src/app/service/producto.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})


export class ListarComponent implements OnInit {
 
  producto: producto = new producto;
  productos: producto[] = [];
  isAdmin=false;
  isUser=false;
  roles: string[] = [];
  
  
  constructor( private service: ProductoService,private router:Router) { 
    
  }

  ngOnInit(): void {
    
    this.service.getProducto().subscribe(data => {this.productos=data.data}); 
    //this.roles = this.tokenService.getAuthorities();
   //   this.roles.forEach(rol => {
   // if (rol === 'ROLE_ADMIN'){
   //   this.isAdmin = true;
  //  }
   // if (rol === 'ROLE_USER'){
   //   this.isUser = true;
  //  }
  }
  
     
    
  
  Editar(producto:producto){
   // localStorage.setItem("id", producto.id_producto.toString());
    this.router.navigate(["productos/editar"]);
  }
  Nuevo(){
    
    this.router.navigate(["productos/nuevo-producto"]);
  }

  Eliminar(producto:producto){
   
    //producto.estado=false;
    this.service.actualizarProducto(producto).subscribe(data =>{
      this.producto = data.data;
      location.reload();
    })
  
  }
}

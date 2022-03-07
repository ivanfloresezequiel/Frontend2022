import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '../Modelo/Response';
import { producto } from '../Modelo/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

 
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/productos';

  getProducto(){
    return this.http.get<Response>(this.Url+"/list");
  }
  crearProducto(producto: producto){
    console.log(producto);
    return this.http.post<Response>(this.Url, producto);
  }
  getProductoId(id:number){
    return this.http.get<Response>(this.Url + "/"+ id);
  }
  actualizarProducto(producto:producto){
    return this.http.put<Response>(this.Url+"/"+producto.id_producto,producto);
  }
}

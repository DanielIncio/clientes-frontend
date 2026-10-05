import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  crear(cliente: any) {
  return this.http.post('http://localhost:8080/clientes', cliente);
  } 

  listar(){
  return this.http.get<any[]>('http://localhost:8080/clientes');
  }

  eliminar(id:number){
    return this.http.delete(`http://localhost:8080/clientes/${id}`);
  }

  actualizar(id:number,cliente:any){
   return this.http.put(`http://localhost:8080/clientes/${id}`, cliente);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente',
  imports: [FormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent implements OnInit{

  nombre: string = '';
  email: string = '';
  clientes: any[] = [];
  idEditando: number | null = null;
  mensajeError : string = ''

  constructor(private cliente: ClienteService) { }

  crearCliente(){
    const nuevoCliente = { nombre:this.nombre, email:this.email };

    if(this.idEditando != null){
      
      this.cliente.actualizar(this.idEditando, nuevoCliente).subscribe({
        next : (respuesta) => {
        console.log("Cliente Actualizado");
        this.clientes = this.clientes.map(c => {
          if (c.id == this.idEditando) {
          return {...c , nombre:this.nombre,  email: this.email}; // spread + nombre y email nuevos
          } else {
          return c;
          }
        });
        this.nombre='';
        this.email='';
        this.idEditando = null;
        },
        error: (error) => {
        this.mensajeError = error.error.message;
        }
      });
    } 
    else {
      this.cliente.crear(nuevoCliente).subscribe({
        next : (respuesta) => {
         console.log("Cliente creado:", respuesta);
         this.nombre ='';
         this.email ='';
        },
        error : (error) => { 
         this.mensajeError = error.error.message;
        }
      });
    }
  }   

  ngOnInit(){
    this.cliente.listar().subscribe({
      next : (respuesta)=> {
        this.clientes = respuesta;
      },
      error : (error) => {
       this.mensajeError = error.error.message;
      }
    });

  }

  eliminarCliente(id:number){
    this.cliente.eliminar(id).subscribe({
      next : (respuesta) => {
      console.log("Cliente eliminado: ",respuesta);
      this.clientes = this.clientes.filter(cliente => cliente.id != id);
      },
      error : (error) =>{
        this.mensajeError = error.error.message;     
      }
    });
  }

  editarCliente(cliente: any){
    this.nombre = cliente.nombre;
    this.email = cliente.email;
    this.idEditando = cliente.id;
  }
}

  


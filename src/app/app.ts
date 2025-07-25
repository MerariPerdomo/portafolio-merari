import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common'; 
import { Navbar } from './components/navbar/navbar';
import { Inicio } from './components/inicio/inicio'
import { Servicios } from './components/servicios/servicios';
import { CardServicios } from './components/elementos/card-servicios/card-servicios';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, Navbar, Inicio, Servicios, CardServicios], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portafolio-merari';
  nombre = 'Merari';
  mostrarMensaje = true;


toggleMensaje(){
  this.mostrarMensaje = !this.mostrarMensaje;
}
}
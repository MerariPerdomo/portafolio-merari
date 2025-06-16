import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,               // <--- Agrega esto, que es necesario para standalone
  imports: [RouterOutlet, NgIf], 
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
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common'; 
import { Navbar } from './components/navbar/navbar';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, Navbar], 
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
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardServicios } from "../elementos/card-servicios/card-servicios";
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, CardServicios],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css'
})
export class Servicios {
  servicios = [
    { texto: 'Diseño de Interfaces de Usuario (UI)', color: 'bg-purple-400' },
    { texto: 'Desarrollo y Mantenimiento de Software', color: 'bg-pink-300' },
    { texto: 'Gestión de Infraestructura de TI', color: 'bg-violet-500' },
    { texto: 'Seguridad Informática', color: 'bg-pink-300' },
    { texto: 'Automatización de Procesos', color: 'bg-purple-400' },
    { texto: 'Gestión de Bases de Datos', color: 'bg-pink-300' },
  ];

  constructor() {}

  ngOnInit(): void {
    // Aquí puedes cargar datos dinámicamente si los traes de un servicio
  }
}

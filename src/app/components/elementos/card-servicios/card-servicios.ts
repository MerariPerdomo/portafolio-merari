import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card-servicios',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './card-servicios.html',
  styleUrl: './card-servicios.css'
})
export class CardServicios {
  @Input() texto: string = '';
  @Input() colorClase: string = 'bg-purple-400';
}

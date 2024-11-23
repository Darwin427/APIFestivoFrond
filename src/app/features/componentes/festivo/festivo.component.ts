import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-festivo',
  templateUrl: './festivo.component.html',
  styleUrls: ['./festivo.component.css'],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgForOf,
    NgIf,
    FormsModule
  ],
})
export class FestivoComponent {
  fecha: string = ''; // Variable para la fecha ingresada
  year: number | null = null; // Año para consultar los festivos
  festivosAnuales: string[] = []; // Almacena los festivos del año

  // Simulación de llamada al backend para determinar si una fecha es festivo
  esFestivo(): void {
    if (this.fecha === '2024-01-01') { // Ejemplo de fecha fija
      alert(`${this.fecha} es festivo.`);
    } else {
      alert(`${this.fecha} no es festivo.`);
    }
  }

  // Simulación de llamada al backend para obtener festivos del año
  obtenerFestivosDelAno(): void { // Cambié "Año" por "Ano"
    if (this.year === 2024) {
      this.festivosAnuales = ['2024-01-01', '2024-04-14', '2024-12-25'];
    } else {
      this.festivosAnuales = [];
    }
  }
}

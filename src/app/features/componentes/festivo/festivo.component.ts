import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-festivo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './festivo.component.html',
  styleUrls: ['./festivo.component.css'],
})
export class FestivoComponent {
  selectedDate: Date | null = null;
  year: number | null = null;

  private apiUrl = 'http://localhost:7171';

  constructor(private http: HttpClient) {}

  checkIfFestive() {
    if (!this.selectedDate) {
      alert('Por favor, selecciona una fecha antes de verificar.');
      return;
    }

    const formattedDate = this.selectedDate.toISOString();
    this.http.get<boolean>(`${this.apiUrl}/festivos/es-festivo?fecha=${formattedDate}`)
      .subscribe({
        next: (result: boolean) => {
          const message = result
            ? 'La fecha seleccionada es festiva.'
            : 'La fecha seleccionada no es festiva.';
          alert(message);
        },
        error: (error: any) => {
          alert('Ocurrió un error al verificar la fecha. Intenta nuevamente.');
          console.error('Error verificando si la fecha es festiva:', error);
        }
      });
  }

  fetchFestivos() {
    if (!this.year) {
      alert('Por favor, ingresa un año antes de buscar festivos.');
      return;
    }

    this.http.get<any[]>(`${this.apiUrl}/festivos?anio=${this.year}`)
      .subscribe({
        next: (data: any[]) => {
          if (data.length === 0) {
            alert(`No se encontraron festivos para el año ${this.year}.`);
          } else {
            const message = `Se encontraron ${data.length} festivos para el año ${this.year}.`;
            alert(message);
          }
        },
        error: (error: any) => {
          alert('Ocurrió un error al obtener los festivos. Intenta nuevamente.');
          console.error('Error obteniendo los festivos:', error);
        }
      });
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReferenciasMaterialModule } from './shared/modulos/referencias-material.module';
import { HttpClientModule } from '@angular/common/http'; // Importación de HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // Para manejar las rutas
    ReferenciasMaterialModule, // Módulo personalizado
    HttpClientModule, // Se agrega HttpClientModule para usar HttpClient en todo el proyecto
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Asegúrate de usar "styleUrls" en plural
})
export class AppComponent {
  title = 'APIFestivos';
}

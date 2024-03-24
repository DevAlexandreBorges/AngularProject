import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { NotasComponent } from './components/notas/notas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, RodapeComponent, MenuLateralComponent, NotasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';
}

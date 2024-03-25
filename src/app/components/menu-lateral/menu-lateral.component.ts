import { Component, input } from '@angular/core';


@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent {

  notas: string[] = ['nota1', 'nota2', 'nota3'];


  onClickNota(){
    
  }

}

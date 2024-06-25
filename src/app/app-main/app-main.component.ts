import { Component, ViewChild } from '@angular/core';
import { MenuLateralComponent } from '../components/menu-lateral/menu-lateral.component';
import { NotasComponent } from '../components/notas/notas.component';

@Component({
  selector: 'app-app-main',
  standalone: true,
  imports: [MenuLateralComponent, NotasComponent],
  templateUrl: './app-main.component.html',
  styleUrl: './app-main.component.css'
})
export class AppMainComponent {

  @ViewChild(NotasComponent) notasComponent!: NotasComponent; 
  @ViewChild(MenuLateralComponent) menuLateralComponent!: MenuLateralComponent;
  
  handleNoteIdEmiter(id: string){
    this.notasComponent.getNote(id);
  }

  handleNewNoteEmiter(){
    this.notasComponent.newNote();
  }

  handleMenuUpdateEmmiter(){
    this.menuLateralComponent.getNotes();
  }

}

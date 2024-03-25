import { Component, input } from '@angular/core';
import { ListNotasService } from '../../service/list-notas.service';
import { Note } from '../../Note';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent {

  notes: Note[] = [];

  constructor(private listNotasService: ListNotasService){
    this.getNotes();
  }

  getNotes(){
    this.listNotasService.getAll().subscribe((notes) => (this.notes = notes));
  }

  onClickNote(index: number){

  }

  onClickRemove(index: number){
    
    this.notes = this.notes.filter((a) => index !== a.id);
  }

  onClickAdd(): void{
    
  }
  

}

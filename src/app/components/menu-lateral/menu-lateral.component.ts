import { Component, Output, input, output, EventEmitter } from '@angular/core';
import { ListNotesService } from '../../service/list-notes.service';
import { Note } from '../../Note';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent {
  @Output() handleNoteId = new EventEmitter<number>();

  notes: Note[] = [];

  constructor(private listNotesService: ListNotesService){
    this.getNotes();
  }

  getNotes(){
    this.listNotesService.getAll().subscribe((notes) => (this.notes = notes));
  }

  onClickNote(index: number){
    this.handleNoteId.emit(index);
  }

  onClickRemove(index: number){
    
    this.notes = this.notes.filter((a) => index !== a.id);
  }

  onClickAdd(): void{
    
  }
  

}

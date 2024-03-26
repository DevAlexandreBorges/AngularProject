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
  @Output() handleNewNote = new EventEmitter<any>();

  notes: Note[] = [];

  constructor(private listNotesService: ListNotesService){
    this.getNotes();
  }

  getNotes(){
    this.listNotesService.getAll().subscribe((notes) => {this.notes = notes; this.notes = this.notes.sort((a,b) => (a.titulo < b.titulo ? -1 : 1));});
  }

  onClickNote(index: number){
    this.handleNoteId.emit(index);
  }

  onClickRemove(index: number){
    this.listNotesService.remove(index);
    this.notes = this.notes.filter((a) => index !== a.id);
    this.handleNoteId.emit(-1);
  }

  onClickNew(): void{
    this.handleNewNote.emit();
  }

}

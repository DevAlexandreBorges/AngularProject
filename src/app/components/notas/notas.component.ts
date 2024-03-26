import { Component, Output, input, EventEmitter } from '@angular/core';
import { ListNotesService } from '../../service/list-notes.service';
import { Note } from '../../Note';

import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
  @Output() handleMenuUpdate = new EventEmitter<any>();
  
  note: Note = {id: -1, titulo: "", conteudo: ""};

  editableNote: boolean = false;

  private readonly NEWNOTE = -2;

  constructor(private listNotesService: ListNotesService){

  }

  getNote(index: number){
    if(index < 0){
      this.note = {id: -1, titulo: "", conteudo: ""};
      return;
    }
    this.listNotesService.get(index).subscribe((note) => (this.note = note));
    this.editableNote = false;
  }

  newNote(){
    this.note = {id: this.NEWNOTE, titulo: "", conteudo: ""};
    this.editableNote = true;
  }

  editNote(){
    this.editableNote = true;
  }

  saveNote(){
    if(this.note.id === this.NEWNOTE){
      this.listNotesService.add(this.note, () => {this.handleMenuUpdate.emit();});
      this.editableNote = false;
      return;
    }
    this.listNotesService.edit(this.note.id, this.note, () => {this.handleMenuUpdate.emit();});
    this.editableNote = false;
  }

  cancelMofication(){
    if(this.note.id === this.NEWNOTE){
      this.note = {id: -1, titulo: "", conteudo: ""};
      return;
    }
    this.getNote(this.note.id);
    this.editableNote = false;
  }

}

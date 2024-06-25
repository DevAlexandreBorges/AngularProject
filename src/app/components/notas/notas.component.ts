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
  
  note: Note = {_id: "-1", titulo: "", conteudo: ""};

  editableNote: boolean = false;

  private readonly NEWNOTE = "-2";

  constructor(private listNotesService: ListNotesService){ }

  getNote(index: string){
    if(!isNaN(parseInt(index)) && parseInt(index) < 0){
      this.note = {_id: "-1", titulo: "", conteudo: ""};
      return;
    }
    this.listNotesService.get(index).subscribe((note) => {this.note = note});
    this.editableNote = false;
  }

  saveNote(){
    if(this.note._id === this.NEWNOTE){
      this.listNotesService.add(this.note, () => {this.handleMenuUpdate.emit();});
      this.editableNote = false;
      return;
    }
    this.listNotesService.edit(this.note._id, this.note, () => {this.handleMenuUpdate.emit();});
    this.editableNote = false;
  }

  newNote(){
    this.note = {_id: this.NEWNOTE, titulo: "", conteudo: ""};
    this.editableNote = true;
  }

  editNote(){
    this.editableNote = true;
  }

  cancelMofication(){
    if(this.note._id === this.NEWNOTE){
      this.note = {_id: "-1", titulo: "", conteudo: ""};
      return;
    }
    this.getNote(this.note._id);
    this.editableNote = false;
  }

}

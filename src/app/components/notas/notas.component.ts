import { Component, input } from '@angular/core';
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
  note: Note = {id: -1, titulo: "", conteudo: ""};

  teste: string = "";

  constructor(private listNotesService: ListNotesService){

  }

  getNote(index: number){
    this.listNotesService.get(index).subscribe((note) => (this.note = note));
  }

}

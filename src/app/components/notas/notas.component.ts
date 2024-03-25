import { Component, input } from '@angular/core';
import { Input } from '@angular/core';
import { ListNotesService } from '../../service/list-notes.service';
import { Note } from '../../Note';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
  @Input() noteId!: number;

  note?: Note;

  constructor(private listNotesService: ListNotesService){}

  getNote(index: number){
    this.listNotesService.get(index).subscribe((note) => (this.note = note));
  }

}

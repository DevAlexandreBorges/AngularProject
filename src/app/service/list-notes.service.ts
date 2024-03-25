import { Injectable } from '@angular/core';
import { Note } from '../Note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListNotesService {

  private apiUrl = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  get(id: number): Observable<Note>{
    return this.http.get<Note>(`${this.apiUrl}/${id}`)
  }

  add(note: Note){

  }

  remove(index: number){

  }

  edit(index: number, note: Note){

  }


}

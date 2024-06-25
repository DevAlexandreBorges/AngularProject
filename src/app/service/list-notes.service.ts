import { Injectable, ViewChild, viewChild } from '@angular/core';
import { Note } from '../Note';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { exit } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ListNotesService {

  private apiUrl = 'http://localhost:3000/api/notes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  get(id: String ): Observable<Note>{
    return this.http.get<Note>(`${this.apiUrl}/${id}`);
  }

  add(note: Note, execAfter: Function = ()=>{}){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.http.post<Note>(this.apiUrl, note).subscribe(() => {execAfter();});
    
  }

  remove(index: String, execAfter: Function = ()=>{}){
    this.http.delete<Note>(`${this.apiUrl}/${index}`).subscribe(() => {execAfter();});
  }

  edit(index: string, note: Note, execAfter: Function = ()=>{}){
    this.http.put<Note>(`${this.apiUrl}/${index}`, note).subscribe(() => {execAfter();});
  }

  /*private asyncAdd(note: Note, notes: Note[], execAfter: Function = ()=>{}){
    notes = notes.sort((a,b) => (a._id < b._id ? -1 : 1))
    this.dbAdd(note, execAfter);
  }

  private dbAdd(note: Note, execAfter: Function = ()=>{}){
    this.http.post<Note>(this.apiUrl, {_id: `${note._id}`, titulo: note.titulo, conteudo: note.conteudo}).subscribe(() => {execAfter();});
  }*/

}

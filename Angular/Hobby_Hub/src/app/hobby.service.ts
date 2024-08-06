import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hobby } from './model/Hobby';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:3004/hobbies";
  }

  insertHobby(hobby: Hobby): Observable<string> {
    return this.http.post<string>(this.url, hobby);
  }

  updateHobby(hobby: Hobby): Observable<string> {
    return this.http.put<string>(this.url + "/" + hobby.id, hobby);
  }

  deleteHobby(id: number): Observable<string> {
    return this.http.delete<string>(this.url + "/" + id);
  }

  findAllHobbies(): Observable<Hobby[]> {
    return this.http.get<Hobby[]>(this.url);
  }

  findHobby(id: number): Observable<Hobby> {
    return this.http.get<Hobby>(this.url + "/" + id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from 'src/app/model/person';
import { ProgrammingLanguage } from 'src/app/model/programming-language';

@Injectable({
  providedIn: 'root',
})
export class ProgrammingLanguageService {
  // Base url
  baseurl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'responseType': 'json',
      'Access-Control-Allow-Origin': '*'
    }),
    params: new HttpParams()
  };

  public getAllProgrammingLanguages(person: Person): Observable<ProgrammingLanguage[]> {
    let params = new HttpParams().append("personId", person.id);
    return this.http.get<ProgrammingLanguage[]>(
        this.baseurl + '/programming-languages', {params: params}
      );
  }

  public editProgrammingLanguage(programmingLanguage: ProgrammingLanguage): Observable<ProgrammingLanguage> {
    return this.http.put<ProgrammingLanguage>(
      this.baseurl + '/programming-languages', programmingLanguage);
  }

  public addProgrammingLanguage(programmingLanguage: ProgrammingLanguage): Observable<ProgrammingLanguage> {
    return this.http.post<ProgrammingLanguage>(
      this.baseurl + '/programming-languages', programmingLanguage);
  }

  public deleteProgrammingLanguage(programmingLanguage: ProgrammingLanguage): Observable<Number>{
    return this.http.delete<Number>(this.baseurl + "/programming-languages/" + programmingLanguage.id);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from 'src/app/model/person';
import { Language } from 'src/app/model/language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  // Base url
  baseurl = 'https://portfolio-carbonaro-api.herokuapp.com';
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

  public getAllLanguages(person: Person): Observable<Language[]> {
    let params = new HttpParams().append("personId", person.id);
    return this.http.get<Language[]>(
        this.baseurl + '/languages', {params: params}
      );
  }

  public editLanguage(language: Language): Observable<Language> {
    return this.http.put<Language>(
      this.baseurl + '/languages', language);
  }

  public addLanguage(language: Language): Observable<Language> {
    return this.http.post<Language>(
      this.baseurl + '/languages', language);
  }

  public deleteLanguage(language: Language): Observable<Number>{
    return this.http.delete<Number>(this.baseurl + "/languages/" + language.id);
  }
}
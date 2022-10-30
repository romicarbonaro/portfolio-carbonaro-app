import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Person } from 'src/app/model/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  // Base url
  baseurl = 'https://portfolio-carbonaro-api.herokuapp.com';
  constructor(private http: HttpClient) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'responseType': 'json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  public getAllPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(
        this.baseurl + '/persons', this.httpOptions
      );
  }

  public editPerson(person: Person): Observable<Person> {
    return this.http.put<Person>(
      this.baseurl + '/persons', person, this.httpOptions);
  }

  public addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(
      this.baseurl + '/persons', person, this.httpOptions);
  }

  public deletePerson(person: Person): Observable<Number>{
    return this.http.delete<Number>(this.baseurl + "/persons/" + person.id, this.httpOptions);
  }
}
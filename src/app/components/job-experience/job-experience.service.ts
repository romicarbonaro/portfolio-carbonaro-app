import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from 'src/app/model/person';
import { JobExperience } from 'src/app/model/job-experience';

@Injectable({
  providedIn: 'root',
})
export class JobExperienceService {
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

  public getAllJobExperiences(person: Person): Observable<JobExperience[]> {
    let params = new HttpParams().append("personId", person.id);
    return this.http.get<JobExperience[]>(
        this.baseurl + '/job-experience', {params: params}
      );
  }

  public editJobExperience(programmingLanguage: JobExperience): Observable<JobExperience> {
    return this.http.put<JobExperience>(
      this.baseurl + '/job-experience', programmingLanguage);
  }

  public addJobExperience(programmingLanguage: JobExperience): Observable<JobExperience> {
    return this.http.post<JobExperience>(
      this.baseurl + '/job-experience', programmingLanguage);
  }

  public deleteJobExperience(programmingLanguage: JobExperience): Observable<Number>{
    return this.http.delete<Number>(this.baseurl + "/job-experience/" + programmingLanguage.id);
  }
}
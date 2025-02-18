import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { env } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL: string | undefined;

  // private BASE_URL = 'http://localhost:8080/dms/api';

  constructor(private http: HttpClient) {
    this.BASE_URL = env.domain;
  }

  getClasses(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/classes/techeazy`);
  }

  getClassDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/classes/techeazy/${id}`);
  }

  getSubjectsByClass(classId: string): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/subjects/by-class/${classId}`);
  }

  getChaptersByClassAndSubject(classId: string, subjectId: string): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/chapters/by-class&Subject/${classId}/${subjectId}`);
  }
  
  addExpressInterest(expressInterestData:any) {
    return this.http.post<any>(`${this.BASE_URL}/expressInterest`, expressInterestData)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://api.techeazyconsulting.com/dms/api'
  // private apiUrl = 'http://localhost:8080/dms/api';

  constructor(private http: HttpClient) {}

  getClasses(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/classes`);
  }

  getClassDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/classes/${id}`);
  }

  getSubjectsByClass(classId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/subjects/by-class/${classId}`);
  }

  getChaptersByClassAndSubject(classId: string, subjectId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/chapters/by-class&Subject/${classId}/${subjectId}`);
  }
  
  addExpressInterest(expressInterestData:any) {
    return this.http.post<any>(`${this.apiUrl}/expressInterest`, expressInterestData)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { env } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL: string | undefined;

  private dataSubject = new BehaviorSubject<any>(null); // Holds API data
  data$ = this.dataSubject.asObservable(); // Exposes data as Observable

  // private BASE_URL = 'http://localhost:8080/dms/api';

  constructor(private http: HttpClient) {
    this.BASE_URL = env.domain;
  }

  getAllClassDetails() {
    if (!this.dataSubject.value) { // Fetch only if data is null
      // this.http.get<any>(`${this.BASE_URL}/detailed-techeazy-classes`).subscribe((response) => {
      this.http.get<any>(`${this.BASE_URL}/classes`).subscribe((response) => {
        this.dataSubject.next(response);
        console.log("API Response Stored:", response);
      });
    }
  }

  getData(): any {
    return this.dataSubject.value; // Returns current data
  }

  getClassById(id: number): any {
    debugger;
    const classes = this.dataSubject.value;  
    return classes ? classes.find((cls: any) => cls.id === id) : null;
  }


  // getDetailedClasses(): Observable<any> {
  //   return this.http.get<any>(`${this.BASE_URL}/detailed-techeazy-classes`);
  // }
  
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

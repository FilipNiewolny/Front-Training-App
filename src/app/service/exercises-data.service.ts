import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exercise } from '../model/Exercise';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ExercisesDataService {

httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
  };

  constructor(
    private http:HttpClient
  ) {  }

  retrieveAllExercise(){
    return this.http.get<Exercise[]>('http://localhost:2345/list/exercise')
  }

  findById(id){
    return this.http.get<Exercise>(`http://localhost:2345/exercise/${id}`)
  }

  deleteExercise(id){
    return this.http.get(`http://localhost:2345/exercise/delete/${id}`)
  }
  findAllMuscle(){
    return this.http.get<Object[]>(`http://localhost:2345/exercise`)
  }

  saveExercise(exercise){
    return this.http.post<any>('http://localhost:2345/exercise' , exercise , this.httpOptions)
    .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    console.log(error)
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.error}`;
    } else {
      // server-side error
      errorMessage = `Kod błędu: ${error.status}\nWiadomość: ${error.error}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}

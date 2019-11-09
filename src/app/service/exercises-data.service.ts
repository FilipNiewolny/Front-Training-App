import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exercise } from '../model/Exercise';

@Injectable({
  providedIn: 'root'
})
export class ExercisesDataService {

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
    console.log(id)
    return this.http.get(`http://localhost:2345/exercise/delete/${id}`)
  }
   
}

import { Component, OnInit } from '@angular/core';
import { Exercise } from '../model/Exercise';
import { ExercisesDataService } from '../service/exercises-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-exercises',
  templateUrl: './list-exercises.component.html',
  styleUrls: ['./list-exercises.component.css']
})
export class ListExercisesComponent implements OnInit {

  
  message: string
  exercises: Exercise[]
  constructor(
    private exerciseService: ExercisesDataService,
    private router: Router
  ) {
    this.exercises = []
  }

  ngOnInit() {
    this.refreshList()
  }
  refreshList() {
    this.exerciseService.retrieveAllExercise().subscribe(
      response => {
        console.log(response);
        this.exercises = response;
      }
    )
  }
  deleteExercise(id) {
    this.exerciseService.deleteExercise(id).subscribe(
      response => {
        console.log(response)
        this.message = `Delete of Exercise ${id} Successful!`
        this.refreshList()
      }
    )
  }

  updateExercise(id){
    this.router.navigate(['exercise' , id])
  }

}

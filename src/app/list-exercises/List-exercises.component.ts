import { Component, OnInit } from '@angular/core';
import { Exercise } from '../model/Exercise';
import { ExercisesDataService } from '../service/exercises-data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-exercises',
  templateUrl: './list-exercises.component.html',
  styleUrls: ['./list-exercises.component.css']
})
export class ListExercisesComponent implements OnInit {


  message: string
  exercises: Exercise[]
  messageSuccess=''
  constructor(
    private exerciseService: ExercisesDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.exercises = []
  }

  ngOnInit() {
    this.messageSuccess = this.route.snapshot.params['messageSuccess']
    this.refreshList()
  }
  refreshList() {
    this.exerciseService.retrieveAllExercise().subscribe(
      response => {
        this.exercises = response;
      }
    )
  }
  deleteExercise(id) {
    this.exerciseService.deleteExercise(id).subscribe(
      response => {
        this.message = `Delete of Exercise ${id} Successful!`
        this.refreshList()
      }
    )
  }

  updateExercise(id){
    this.router.navigate(['exercise' , id])
  }
  addExercise(id){
    this.router.navigate(['exercise' , -1])
  }
}

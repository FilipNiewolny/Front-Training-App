import { Component, OnInit } from '@angular/core';
import { ExercisesDataService } from '../service/exercises-data.service';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from '../model/Exercise';
import { Router } from '@angular/router';


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  id: number
  exercise: Exercise
  errorMessage = "Coś poszło nie tak"
  invalidPostMethod = false
  messageSuccess = "success update"
  error: string
  muscles = []
  constructor(
    private exerciseService: ExercisesDataService,
    private router: ActivatedRoute,
    private router2: Router,
  ) {
    this.muscles = []
  }

  ngOnInit() {
this.exercise = new Exercise("","","")
    this.id = this.router.snapshot.params['id']
    this.exerciseService.findById(this.id).subscribe(
      response=> {
        this.exercise = response
      }
    )
    this.exerciseService.findAllMuscle().subscribe(
      response =>{
        this.muscles = response
      }
    )
  }
  saveExercise(){
    this.exerciseService.saveExercise(this.exercise).subscribe(
      response=>{
        if(response.headers.get('status') === 201){
        this.router2.navigate(['list/exercise' , this.messageSuccess ])
        }},
      error => {
        this.error = error;
      }
    );
  }
}

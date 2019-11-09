import { Component, OnInit } from '@angular/core';
import { ExercisesDataService } from '../service/exercises-data.service';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from '../model/Exercise';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  id: number
  exercise: Exercise
  constructor(
    private exerciseService: ExercisesDataService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id']
    
    this.exerciseService.findById(this.id).subscribe(
      response=> {
        console.log(response)
        this.exercise = response
      }
    )
    
  }

}

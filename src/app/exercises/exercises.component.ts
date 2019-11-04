import { Component, OnInit } from '@angular/core';
export class Exercise{
  constructor(
    public id: number,
    public name:string,
    public muscle:string
  ){}
}
@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  exercises =[
    new Exercise(1,'wyciskanie','klata'),
    new Exercise(2,'przysiad','nogi'),
    new Exercise(3,'OHP','barki')
  ]
  constructor() { }

  ngOnInit() {
  }

}

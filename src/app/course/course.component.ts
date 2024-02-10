import {Component, OnInit} from '@angular/core';
import {CourseService} from "./course.service";

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{
  courses;

  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }
  ngOnInit(): void {
    let data = this.courses;
    console.log({data});
    console.log('data : ' + data[4]);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

// Decorator yang berisi properties untuk pemanggilan components...
@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;
  @Input() cardIndex: number;
  // Sama halnya seperti pada default browser event, misalnya click pada child
  // Maka akan dilakukan emit fungsi 'click' pada child ke parent
  // Output dengan EventEmitter bertujuan untuk bubble event ke parent, mendefinisikan custom event handler pada browser
  @Output('courseSelected') courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("card component - button clicked...");
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    if(this.course.category == "BEGINNER") {
      return 'beginner';
      // return ['beginner'];
    }
    // return {
    //   'beginner': this.course.category == 'BEGINNER'
    // }
  }

  cardStyles() {
    return {'background-image': 'url('+ this.course.iconUrl +')'};
  }

}

import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { CourseImageComponent } from '../course-image/course-image.component';
import { Course } from '../model/course';

// Decorator yang berisi properties untuk pemanggilan components...
@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input() course: Course;

  @Input()
  noImageTpl: TemplateRef<any>;

  @Input() cardIndex: number;
  // Sama halnya seperti pada default browser event, misalnya click pada child
  // Maka akan dilakukan emit fungsi 'click' pada child ke parent
  // Output dengan EventEmitter bertujuan untuk bubble event ke parent, mendefinisikan custom event handler pada browser
  @Output('courseSelected') courseEmitter = new EventEmitter<Course>();

  // Tidak bisa menggunakan ViewChild, hanya dikhususkan untuk penggunaan content saja.. (Tidak bisa melihat selain konten dari ng-content)
  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
    console.log("Image Reference", this.images);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
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

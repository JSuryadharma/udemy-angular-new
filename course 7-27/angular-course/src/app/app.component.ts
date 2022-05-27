import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;
  // title = COURSES[0].description;
  // price = 9.99;
  // rate = 0.67;
  // course = COURSES[0];

  // View Child secara default(bila argumen berupa tipe data typescript, CourseCardComponent) akan mencari child index pertama yang ditemukan
  // namun bisa menerima query alternatif seperti nama ref template
  // Dapat digunakan untuk mendapatkan suatu Component, atau HTML Element sesuai dengan read property
  // @ViewChild('cardRef1', {read: ElementRef})
  // card1: ElementRef;
  // card1: CourseCardComponent;
  // @ViewChild('container')
  // containerDiv: ElementRef;
  // ViewChild bersifat local, hanya terbatas dari template saja.
  // Tidak bisa mengakses component pada level lebih dalam
  // @ViewChild('courseImage')
  // courseImage: ElementRef;
  // startDate = new Date(2000, 0, 1);

  // Jadi ViewChildren mencari sesuai argumen, bukan tipe data dari variabel penerima
  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<ElementRef>;

  constructor() {
    // console.log("containerDiv", this.card1);
  }

  // Component Lifecycle Hook, dipanggil oleh framework setelah lifecycle dari suatu component
  ngAfterViewInit(): void {
      // console.log("containerDiv", this.card1);
      // this.courses[1].description = "test"; Ini error karena adanya rekursi berulang, data flow jadi error
      // console.log("courseImage", this.courseImage);
      console.log(this.cards);
      // Subscribe merupakan observable yang berfungsi untuk mengamati adanya perubahan pada suatu object
      this.cards.changes.subscribe(
        cards => console.log(cards)
      );
  }

  onCardClicked() {
    console.log("App component - click event bubbled");
  }

  onCourseSelected(course: Course) {
    console.log("Browser custom event handler...", course);
    // console.log("Card", this.card1);
    // console.log("containerDiv", this.containerDiv);
  }

  onCoursesEdited() {
    this.courses.push(this.courses[1]);
  }

}

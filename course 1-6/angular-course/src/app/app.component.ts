import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Data binding dapat dibinding antara satu language dengan language lainnya, merupakan suatu fleksibilitas dari Angular.
  // Extends the browser app functionality with our functionalities.
  // Binding data dilakukan pada view template, dengan interpolation expression..
  title = 'Angularnya Jojo';

  data = {
    title: 'Check title'
  };

  onTitleClicked() {
    alert('Hello world!');
  }

  onKeyUp(newTitle  : string) {
    this.data.title = newTitle;
  }

}

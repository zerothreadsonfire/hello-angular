import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Saty';
  inputVal1 = 'abc';

  constructor() {
    setTimeout(() => {
      this.setInputVal1("def");
    }, 3000);
  }

  getNameInUpperCase() {
    return this.name.toUpperCase();
  }

  setInputVal1(value: string) {
    this.inputVal1 = value;
  }
}

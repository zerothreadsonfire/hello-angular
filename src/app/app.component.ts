import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChildComp } from './childComp/childComp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Satyam kumar';
  inputVal1 = 'abc';
  btnLabel = 'click me';
  inputVal2 = ''
  displayCondition = true;
  colorValue='black';
  animalsList=['cats','dogs','bhalu'];
  dataForChild: string = "secret monkey";
  dataFromChild: string = "";

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

  onClick(event: Event) {
    console.log(event);
    this.btnLabel = 'submit';
  }

  onClick2(value: string) {
    console.log(value);
  }

  onClickChangeDisplay() {
    this.displayCondition = !this.displayCondition;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ChildComp
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}

import { Component, EventEmitter, Input, Output, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'child-comp',
  templateUrl: './childComp.html',
})
export class ChildComp {
  @Input() dataFromParent: string = "";
  // Renaming data coming from parent
  // @Input("dataFromParent") newName: string = "";

  @Output() childEvent = new EventEmitter();

  constructor() {

  }

  fireEvent() {
    this.childEvent.emit('Hey There from child');
  }
}
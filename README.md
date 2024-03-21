## Interpolation
Interpolation refers to embedding expressions or displaying text in the view from the controller.
It is one-way data binding from class to template.
It uses {{}} as delimiters.

1. We can embedd methods/properties and evaluate expressions. However assignment of variables is not allowed. 
2. Cannot directly access global variables like document or window. 

## Property Binding
It is used to bind data to DOM elements.
To bind to an element's property, enclose it in sq brackets [], which identifies the property as target property. Alternative syntax is to use prefix "bind-" to property name. 
It is almost similar to interpolation except that property binding supports data types other than string like boolean.
It is one-way data binding from class to template.

Difference between attributes and properties ?
1. Attributes are defined by HTML whereas properties are defined by DOM.
2. Attributes are used to define the DOM properties and then properties come into play.
3. Attributes values cannot change once they are initialized. However properties can change.
4. Attributes are defined on HTML elements and then once browser parses the code, a corresponding DOM node is created which is basically an object of K-V pairs and there it is called properties.

When to use Property Binding over Interpolation ?
1. Not sure but for HTML elements it's better to go with property binding and stick to interpolation only for displaying texts.

## Class Binding
TBD

## Style Binding
TBD

## Event Binding
Event binding is used to capture events signalling data flow from templates to class.
It is one-way data binding from template to class.
The syntax is to wrap the target event name in paranthesis to the left of equal sign and use a quoted template statement to the right. (click)="onClick()"

## Template Reference Variables
As the name suggests it allows us to refer data within the template. 
It can refer to a DOM element within a template, a directive or component or a templateRef from ng-template.
The syntax is to use a # symbol to declare a template variable.

## Two Way Data Binding
Two Way data binding is a technique to keep the view and model/controller in sync. It basically combines property binding(model->view) and event binding(view->model). 
It should be used when we want to listen for events and update values simultaneously.
The syntax is a combination of event binding and property binding, ie, [()].

## Structural Directives - ngIf, ngSwitch, ngFor
We can use if-else, switch and for statments in Angular.

## Component Interactions
Data can be shared between parent and child components using @Input() and @Output() Decorators.
@Input() - Child component accepts data from parent component.
1. We need to bind the property we need to send down to the child in the child's html selector.
2. Inside the child component we can use @Input() to reference this property.
3. Finally it can be used in child's template.

@Output() - Child component sends out event to parent component.
1. Firstly we need to emit an event containing the data from child using @Output.
2. We then bind the event on the child's html selector used in parent template to a property in parent's controller.
3. We can then finally use this property and render it in parent's template.

## Pipes
Pipes are used to transform data. Pipes only transform data in view, it has no effect on the data in controller.

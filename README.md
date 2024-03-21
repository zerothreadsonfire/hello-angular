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
Not sure but for HTML elements it's better to go with property binding and stick to interpolation only for displaying texts.


## Event Binding

## Template Reference Variables

## Two Way Data Binding
Two Way data binding is a technique to keep the view and model/controller in sync. It basically combines property binding(model->view) and event binding(view->model). 
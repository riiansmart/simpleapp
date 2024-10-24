import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  question = "What's your name?";
  answer = "unknown";

// Initializing a FormGroup to handle form data. The form has a single control named 'answer'.
appForm = new FormGroup({
  answer: new FormControl('') // Creates a new form control for inputting an answer, initialized with an empty string.
});

// Method to handle form submission.
onSubmit(data: Partial<{ answer: string | null }>) { // Accepts partial form data with 'answer' which may be a string or null.
  this.answer = data.answer!; // Updates the 'answer' property with the submitted form data. The '!' is a TypeScript non-null assertion operator, asserting that `data.answer` is not null.
  console.log('Your name is:', this.answer); // Logs the submitted answer to the console.
  } 
}
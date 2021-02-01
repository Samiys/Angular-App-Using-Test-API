import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitted = false;
  success = false;
  messageForm = this.formBuilder.group({
    name: ['', Validators.required],
    message: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }
    this.success = true;
  }

}

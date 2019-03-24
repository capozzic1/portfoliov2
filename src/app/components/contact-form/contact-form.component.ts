

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  model = {
    name: '',
    email: '',
    message: ''
  };

  public contactForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder
  ) { }

  onSubmit(): void {
    
    this.http.post(`/email`, this.contactForm.value).subscribe();
    alert("Your message has been sent!")
  }
  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators. required]
    })
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }


}

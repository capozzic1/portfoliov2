import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  model: Object = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient
  ) { }

  onSubmit(): void {
    this.http.post('/email', this.model).subscribe();
  }
  ngOnInit() {
  }


}

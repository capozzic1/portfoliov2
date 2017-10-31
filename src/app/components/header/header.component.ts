import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})

export class Header implements OnInit {
  //background-image: url('../../../assets/images/glow.jpg');

  aboutPage: boolean;
  homePage: boolean;
  contactPage: boolean;
  currBackground: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currBackground = this.route.snapshot.url.join('');

    if (this.currBackground == 'home') {
      this.homePage = true;
    } else if (this.currBackground == 'about') {
      this.aboutPage = true;
    } else if (this.currBackground == 'contact') {
      this.contactPage = true;
    }


  }


}

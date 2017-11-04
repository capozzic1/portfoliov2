import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(200%)' }))
    ]),
    transition('in => out', animate('100ms ease-out')),
    transition('out => in', animate('100ms ease-in'))
  ]

})

export class Header implements OnInit {
  //background-image: url('../../../assets/images/glow.jpg');

  aboutPage: boolean;
  homePage: boolean;
  contactPage: boolean;
  portfolioPage: boolean;
  currBackground: string;

  constructor(private route: ActivatedRoute, public state = 'out') { }

  ngOnInit(): void {
    this.currBackground = this.route.snapshot.url.join('');

    if (this.currBackground == 'home') {
      this.homePage = true;
    } else if (this.currBackground == 'about') {
      this.aboutPage = true;
    } else if (this.currBackground == 'contact') {
      this.contactPage = true;
    } else if (this.currBackground == 'portfolio') {
      this.portfolioPage = true;
    }


  }

  toggleNav(): void {
    this.state = this.state === 'in' ? 'out' : 'in';
  }


}

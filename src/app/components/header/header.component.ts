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
      state('in', style({ transform: 'translateY(20%)' })),
      state('out', style({ transform: 'translateY(-140%)' })),
      transition('in => out', animate('100ms ease-out')),
      transition('out => in', animate('100ms ease-in'))
    ])
  ]
})
/*

*/
export class Header implements OnInit {
  //background-image: url('../../../assets/images/glow.jpg');

  aboutPage: boolean;
  homePage: boolean;
  contactPage: boolean;
  portfolioPage: boolean;
  currBackground: string;
  state: string = 'out';
  navOpen: boolean = true;

  constructor(private route: ActivatedRoute) { }

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

  toggleClass(): void {
    this.navOpen = !this.navOpen;
    this.state = this.state === 'in' ? 'out' : 'in';
  }

}

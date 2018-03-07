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
  //background-image: url('../../../assets/compressed/images/glow.jpg');

  aboutPage: boolean;
  blogPage: boolean;
  homePage: boolean;
  contactPage: boolean;
  singlePost: boolean;
  portfolioPage: boolean;

  state: string = 'out';
  navOpen: boolean = true;
  bgClass: string;
  heightClass: string;

  // { 'home-height' : homePage, 'about-height' : aboutPage,
  // 'contact-height' : contactPage, 'port-height':portfolioPage , 'single-height':singlePost}

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const page = this.route.snapshot.url.join('');
    console.log(this.route.snapshot.url);
    switch (page) {
      case 'home': {
        this.bgClass = 'home-bg';
        this.heightClass = 'home-height';
        this.homePage = true;
        break;
      }
      case 'about': {
        this.bgClass = 'about-bg';
        this.heightClass = 'about-height';
        this.aboutPage = true;
        break;
      }
      case 'contact': {
        this.bgClass = 'contact-bg';
        this.heightClass = 'contact-height';
        this.contactPage = true;
        break;
      }
      case 'portfolio': {
        this.bgClass = 'port-bg';
        this.heightClass = 'port-height';
        this.portfolioPage = true;
        break;
      }
      case 'blog': {
        this.bgClass = 'blog-bg';
        this.blogPage = true;
        break;
      }
      default:
        this.bgClass = 'single-post';
        this.singlePost = true;
        this.heightClass = 'single-height';
        break;
    }


  }

  toggleClass(): void {
    this.navOpen = !this.navOpen;
    this.state = this.state === 'in' ? 'out' : 'in';
  }

}

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
  imgSrc: string[] = ['home-bg'];

  currBackground: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currBackground = this.route.snapshot.url.join('');



  }


}

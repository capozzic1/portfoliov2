import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
//test
export class AppComponent {

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {

  }


}

import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent {
  //sets initial value to show loading spinner on first load

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics
  ) {

  }
}

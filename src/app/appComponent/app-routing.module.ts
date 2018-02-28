import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { AboutComponent } from '../views/about/about.component';
import { HomeComponent } from '../views/home/home.component';
import { ContactComponent } from '../views/contact/contact.component';
import { NgModule } from '@angular/core';
import { BlogComponent } from '../views/blog/blog.component'
import { PortfolioPageComponent } from '../views/portfolio-page/portfolio-page.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'portfolio', component: PortfolioPageComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: ':slug',
    component: SinglePost
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { };

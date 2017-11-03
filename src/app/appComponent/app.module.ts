import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { Header } from '../components/header/header.component';
import { CheckPortfolioComponent } from '../components/check-portfolio/check-portfolio.component';
import { PortfolioCarouselComponent } from '../components/portfolio-carousel/portfolio-carousel.component';
import { CarouselModule } from 'ngx-bootstrap';
import { SkillSectionComponent } from '../components/skill-section/skill-section.component';
import { NeedHelpComponent } from '../components/need-help/need-help.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AboutComponent } from '../views/about/about.component';
import { HomeComponent } from '../views/home/home.component';
import { TitleNavComponent } from '../components/title-nav/title-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutSnippetComponent } from '../components/about-snippet/about-snippet.component';
import { ContactComponent } from '../views/contact/contact.component';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';
import { PortfolioPageComponent } from '../views/portfolio-page/portfolio-page.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ProjectService } from '../services/projects/project.service';
import { WindowRef } from '../services/window/window.service';

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
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },


]

@NgModule({
  declarations: [
    AppComponent,
    Header,
    CheckPortfolioComponent,
    PortfolioCarouselComponent,
    SkillSectionComponent,
    NeedHelpComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    TitleNavComponent,
    AboutSnippetComponent,
    ContactComponent,
    ContactFormComponent,
    PortfolioPageComponent,
    ProjectsComponent


  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,

    )
  ],
  providers: [ProjectService, WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }

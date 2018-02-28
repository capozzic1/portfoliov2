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
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

import { AboutSnippetComponent } from '../components/about-snippet/about-snippet.component';
import { ContactComponent } from '../views/contact/contact.component';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';
import { PortfolioPageComponent } from '../views/portfolio-page/portfolio-page.component';
import { BlogComponent } from '../views/blog/blog.component'
import { ProjectsComponent } from '../components/projects/projects.component';
import { ProjectService } from '../services/projects/project.service';
import { WindowRef } from '../services/window/window.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from '../components/post-list/post-list.component';
import { PostService } from '../services/blog/posts.service';
import { AppRoutingModule } from './app-routing.module';



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

    AboutSnippetComponent,
    ContactComponent,
    ContactFormComponent,
    PortfolioPageComponent,
    ProjectsComponent,
    BlogComponent,
    PostListComponent


  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    CarouselModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    FormsModule,
    HttpClientModule,



  ],
  providers: [ProjectService, WindowRef, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSnippetComponent } from './about-snippet.component';

describe('AboutSnippetComponent', () => {
  let component: AboutSnippetComponent;
  let fixture: ComponentFixture<AboutSnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSnippetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

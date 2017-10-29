import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPortfolioComponent } from './check-portfolio.component';

describe('CheckPortfolioComponent', () => {
  let component: CheckPortfolioComponent;
  let fixture: ComponentFixture<CheckPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

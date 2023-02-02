import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyQuestionsListComponent } from './survey-questions-list.component';

describe('SurveyQuestionsListComponent', () => {
  let component: SurveyQuestionsListComponent;
  let fixture: ComponentFixture<SurveyQuestionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyQuestionsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyQuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

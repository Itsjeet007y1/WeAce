import { Component } from '@angular/core';
import { Questions } from './questions';

@Component({
  selector: 'app-survey-questions-list',
  templateUrl: './survey-questions-list.component.html',
  styleUrls: ['./survey-questions-list.component.css']
})
export class SurveyQuestionsListComponent {
  //Creating an arrya of questions
  questionList: Questions[] = [
    new Questions(1, "Question1"),
    new Questions(2, "Question2"),
    new Questions(1, "Question3"),
    new Questions(2, "Question4"),
    new Questions(1, "Question5"),
    new Questions(2, "Question6"),
  ]
}

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
    new Questions(1, "Are you proud to be a member of your team?"),
    new Questions(2, "On a scale of 1 to 10, how comfortable are you in giving feedback to your manager?"),
    new Questions(3, "How strongly do you feel valued at work?"),
    new Questions(4, "Are you able to work productively in your remote-work environment?"),
    new Questions(5, "What is something our company can do to better support you while working remotely?"),
    new Questions(6, "How frequently do you receive recognition from your manager?"),
  ]
}

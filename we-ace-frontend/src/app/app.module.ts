import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyQuestionsListComponent } from './survey-questions-list/survey-questions-list.component';
import { SurveyReportComponent } from './survey-report/survey-report.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyQuestionsListComponent,
    SurveyReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

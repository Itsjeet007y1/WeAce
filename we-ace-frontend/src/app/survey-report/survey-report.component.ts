import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js/auto';

@Component({
  selector: 'app-survey-report',
  templateUrl: './survey-report.component.html',
  styleUrls: ['./survey-report.component.css'],
})
export class SurveyReportComponent implements OnInit {
  @Input() inputData: any;

  constructor() {}

  ngOnInit() {
    console.log('----------------');
    console.log(this.inputData);
    const data = [
      { factor: "Job satisfaction", count: this.inputData['ans1'] },
      { factor: "Salary and benefits", count: this.inputData['ans2'] },
      { factor: "Work-life balance", count: this.inputData['ans3'] },
      { factor: "Management", count: this.inputData['ans4'] },
      { factor: "Opportunities for growth and development", count: this.inputData['ans5'] },
      { factor: "Work Satisfaction", count: this.inputData['ans6'] },
      { factor: "Total Employee satisfaction index:", count: this.inputData['satisfactionIndex'] }
    ];

    new Chart('myChart', {
      type: 'doughnut',
      data: {
        labels: data.map((row) => row.factor),
        datasets: [
          {
            label: 'Based on factor',
            data: data.map((row) => row.count),
          },
        ],
      },
    });
  }
}

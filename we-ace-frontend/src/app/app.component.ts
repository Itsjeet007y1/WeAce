import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'we-ace-frontend';
  showReport: boolean = false;
  data: any;

  constructor(private http: HttpClient) {

  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
    this.http.post('http://localhost:8080/getReport', form.value).subscribe(
      response => {
        console.log(response);
        this.data = response;
        console.log("responseData:" + this.data['satisfactionIndex']);
        this.showReport = true;
      },
      error => {
        console.log(error)
      }
    )
  }

  reset() {
    console.log("Reset called:==================");
    this.showReport = false;
  }
}

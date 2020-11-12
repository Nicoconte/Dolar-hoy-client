import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private http : HttpClient) { }

  califications : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  calification : any;
  comment : any;

  ngOnInit(): void {
  }

  feedBackForm = new FormGroup({
    comment : new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ])
  });

  changeButtonStyle(id : any) {
    document.getElementById(id).style.backgroundColor="#2a3d66";
    this.calification = id;
  }

  sendFeedBack() {
    this.comment = this.feedBackForm.value.comment;
    
    let body = {
      "comment" : this.comment,
      "calification" : this.calification != null ? this.calification : "No califico"
    }
  
    this.http.post<any>("/api/v1/feedback", body);
  }

}

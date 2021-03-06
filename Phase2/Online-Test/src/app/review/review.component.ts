import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Questions } from '../questions';
import { QuestionsService } from '../questions.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  myQuestions: Observable<Questions[]>;
  myAnswers: Array<string> = [];
  
  constructor(public qSer: QuestionsService, private router: Router) {
    this.myQuestions = qSer.getQuestions();   //dynamically create the array of questions
  }

  ngOnInit(): void {
    // on initialization, get submitted answers from sessionStorage and put them in an array
    this.myQuestions.subscribe(allQuestions => {
      for (let qq of allQuestions) {
        this.myAnswers.push(sessionStorage.getItem(qq.question) || "");
      }
    })
  }

  gotoQuiz() {
    this.router.navigate(['/quiz']);
  }

  gotoResult() {
    this.router.navigate(['/result']);
  }

}
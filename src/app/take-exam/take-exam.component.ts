import { Component, OnInit } from '@angular/core';
import { question } from '../Models/question';
import { ReadQuestionsService } from '../service/read-questions.service';

@Component({
  selector: 'app-take-exam',
  templateUrl: './take-exam.component.html',
  styleUrls: ['./take-exam.component.css']
})
export class TakeExamComponent implements OnInit {

  correctAnswerCount:number;
  totalQuestions:number;
  questions:question[]=[];
  constructor(private questionService: ReadQuestionsService) { }

  ngOnInit(): void {
    console.log("on Init");
    this.questionService.getQuestions().subscribe(res=>this.questions=res);
  }

  submit(){
    this.correctAnswerCount = 0;
    this.totalQuestions = this.questions.length;
    for(let i=0; i< this.questions.length; i++ ){
      if (this.questions[i]["selected"] != null){
        if (this.questions[i]["selected"] == this.questions[i]["answer"])
          this.correctAnswerCount ++;
      }
    }
  }

  reset(){
    this.correctAnswerCount = 0;
    this.totalQuestions = this.questions.length;
    for(let i=0; i< this.questions.length; i++ ){
        this.questions[i]["selected"] = "";
      }
    }
}

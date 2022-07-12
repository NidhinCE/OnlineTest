import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { question } from '../Models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  url:"./assets/questions.json"
  constructor(private http: HttpClient) { }

  // getQuestions():Observable<question[]>{
  //   console.log("File Accessed");
  //   return this.http.get<question[]>(this.url);
  // }
}

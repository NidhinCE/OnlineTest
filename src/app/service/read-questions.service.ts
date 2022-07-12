import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { question } from '../Models/question';

@Injectable({
  providedIn: 'root'
})
export class ReadQuestionsService {

  url:string = "./assets/questions.json"
  constructor(private http: HttpClient) { }

  getQuestions():Observable<question[]>{
    console.log("File Accessed");
    console.log(this.url);
    return this.http.get<question[]>(this.url);
  }
}

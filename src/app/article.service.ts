import { Injectable } from "@angular/core";
import {Article} from "./models/article";

@Injectable()
export class ArticleService {

  constructor() { }

  public getArticles(): Article[] {
    return [{
      title: "My First Article",
      content: "Hello World",
      author: "Moi"
    }, {
      title: "Angular component",
      content: "Angular component looks awesome!",
      author: "Moi"
    }, {
      title: "Angular service",
      content: "I read something about angular service, i will try it soon",
      author: "Moi"
    }];
  }

}

import { Component, OnInit } from "@angular/core";
import {ArticleService} from "../article.service";
import {Article} from "../models/article";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.css"]
})
export class ArticlesComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  articles(): Article[] {
    return this.articleService.getArticles();
  }

  ngOnInit() {
  }

}

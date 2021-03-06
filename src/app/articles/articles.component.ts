import { Component, OnInit } from "@angular/core";
import {ArticleService} from "../Services/article.service";
import {Article} from "../models/article";
import {Observable} from "rxjs/Observable";
import {FormBuilder} from "@angular/forms";
import { ArticlesFilterPipe } from "../articles-filter.pipe";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.css"]
})
export class ArticlesComponent implements OnInit {

  private _articles: Observable<Article[]>;

  constructor(private articleService: ArticleService) { }

  articles(): Observable<Article[]> {
    return this._articles;
  }

  ngOnInit() {
    this._articles = this.articleService.getArticles();
  }

  delete(article: Article) {
    this.articleService.delete(article.id).subscribe(() => {
      this._articles = this.articleService.getArticles();
    });
  }

  update(article: Article) {
    this.articleService.update(article).subscribe(() => {
      this._articles = this.articleService.getArticles();
    });
  }
}

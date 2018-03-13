import { Injectable } from "@angular/core";
import {Article} from "../models/article";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ArticleService {

  articles: Article[];

  constructor(private http: HttpClient) { }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public delete(id: number): Observable<Article> {
    return this.http.delete<Article>("http://localhost:3000/articles/" + id);
  }

  public add(article: {title, content, author}): Observable<Article> {
    return this.http.post<Article>("http://localhost:3000/articles", article);
  }

  public update(article: Article): Observable<Article> {
    return this.http.put<Article>("http://localhost:3000/articles/" + article.id, article);
  }
}

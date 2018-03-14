import { Pipe, PipeTransform } from "@angular/core";
import {Article} from "./models/article";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Pipe({
  name: "articlesFilter"
})
export class ArticlesFilterPipe implements PipeTransform {

  transform(articles: Observable<Article[]>, searchFilter: string): Observable<Article[]> {
    if (articles === null) { return new Observable<Article[]>(); }
    searchFilter = searchFilter.toLowerCase();
    return articles.map(arts => arts.filter(article => (article.title && article.title.toLowerCase().includes(searchFilter)) ||
      (article.content && article.content.toLowerCase().includes(searchFilter)) ||
      (article.author && article.author.toLowerCase().includes(searchFilter) )));
  }

}

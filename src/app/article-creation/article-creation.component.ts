import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import {Article} from "../models/article";
import {ArticleService} from "../Services/article.service";

@Component({
  selector: "app-article-creation",
  templateUrl: "./article-creation.component.html",
  styleUrls: ["./article-creation.component.css"]
})
export class ArticleCreationComponent implements OnInit {

  articleForm: FormGroup;
  article: Article;

  @Output() createdArticle: EventEmitter<Article> = new EventEmitter();


  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.articleForm = this.fb.group({
      title: ["Temp Title", Validators.required ],
      content: ["", Validators.required ],
      author: ["", Validators.required ],
    });
  }

  createArticle() {
    this.articleService.add({title: this.articleForm.value.title,
      content: this.articleForm.value.content,
      author: this.articleForm.value.author}).subscribe(article => this.article = article);
    this.createdArticle.emit(this.article);
  }

  ngOnInit() {
  }

}

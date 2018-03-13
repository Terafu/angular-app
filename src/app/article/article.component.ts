import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Article} from "../models/article";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  @Input("article") _article: Article;

  articleForm: FormGroup;

  @Output() deletedArticle: EventEmitter<Article> = new EventEmitter();
  @Output() updatedArticle: EventEmitter<Article> = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  public article(): Article {
    return this._article;
  }

  public title(): string {
    return this._article.title;
  }

  public content(): string {
    return this._article.content;
  }

  public author(): string {
    return this._article.author;
  }

  public id(): number {
    return this._article.id;
  }

  public delete() {
    this.deletedArticle.emit(this._article);
  }

  public update() {
    console.log(this.articleForm.value);
    this.updatedArticle.emit(this.articleForm.value);
  }

  ngOnInit() {
    this.articleForm = this.fb.group({
      title: [this._article.title, Validators.required ],
      content: [this._article.content, Validators.required ],
      author: [this._article.author, Validators.required ],
      id: [this._article.id],
    });

  }
}

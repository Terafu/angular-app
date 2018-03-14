import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { ArticleComponent } from "./article/article.component";
import { ArticlesComponent } from "./articles/articles.component";
import { ArticleService } from "./Services/article.service";
import { HttpClientModule } from "@angular/common/http";
import { ArticleCreationComponent } from "./article-creation/article-creation.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ArticlesFilterPipe } from "./articles-filter.pipe";

const appRoutes: Routes = [
  { path: "create", component: ArticleCreationComponent },
  { path: "articles", component: ArticlesComponent },
  { path: "", component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    HomeComponent,
    ArticlesFilterPipe
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

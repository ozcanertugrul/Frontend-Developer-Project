import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-app';
  articles: any[] = []; 
  country: string = 'us'; 
  category: string = 'general'; 
  searchQuery: string = ''; 
  page: number = 1; 
  pageSize: number = 10; 

  constructor(private newsService: NewsService, private router: Router) {}

  
  onSearch() {
    if (!this.searchQuery) {
      console.error('Arama sorgusu boş!'); 
      return; 
    }
  
    this.newsService.getTopHeadlines(this.country, this.category, this.searchQuery, this.page, this.pageSize)
      .subscribe(data => {
        this.articles = data.articles; 
        console.log(this.articles); 
      }, error => {
        console.error('Hata:', error); 
      });
  }
  

  
  isHomePage(): boolean {
    return this.router.url === '/home' || this.router.url === '/'; 
  }
}

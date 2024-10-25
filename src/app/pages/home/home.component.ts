import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Math=Math;
  articles: any[] = []; 
  sliderArticles: any[] = []; 
  remainingArticles: any[] = []; 
  searchQuery: string = ''; 
  currentSlide: number = 0; 
  totalResults: number = 0; 
  pageSize: number = 23; 
  page: number = 1; 

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getTopHeadlines(); 
  }

  getTopHeadlines() {
    this.newsService.getTopHeadlines('us', 'general', this.searchQuery, this.page, this.pageSize).subscribe(data => {
      this.articles = data.articles; 
      this.totalResults = data.totalResults; 

      
      if (!this.searchQuery) {
        this.sliderArticles = this.articles.slice(0, 3);
        this.remainingArticles = this.articles.slice(3);
      } else {
        
        this.sliderArticles = [];
        this.remainingArticles = this.articles; 
      }
    });
  }

  onSearch() {
    this.page = 1; 
    this.getTopHeadlines(); 
  }

  nextSlide() {
    if (this.currentSlide < this.sliderArticles.length - 1) {
      this.currentSlide++;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  goToPage(page: number) {
    this.page = page; 
    this.getTopHeadlines(); 
  }
}

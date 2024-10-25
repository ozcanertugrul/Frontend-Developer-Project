import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  Math = Math;
  articles: any[] = [];
  sliderArticles: any[] = [];
  remainingArticles: any[] = [];
  currentSlide: number = 0;
  page: number = 1;
  pageSize: number = 23;
  totalResults: number = 0;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.fetchNews(); 
  }

  fetchNews(category: string = ''): void {
    this.newsService.getTopHeadlines('us', category, '', this.page, this.pageSize)
      .subscribe(response => {
        this.articles = response.articles;
        this.totalResults = response.totalResults;
        this.sliderArticles = this.articles.slice(0, 3);
        this.remainingArticles = this.articles.slice(3);
        this.currentSlide = 0; 
      });
  }

  filterByCategory(category: string): void {
    this.fetchNews(category); 
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.sliderArticles.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.sliderArticles.length) % this.sliderArticles.length;
  }

  goToPage(page: number): void {
    this.page = page;
    this.fetchNews(); 
  }

  get sliderTranslateX(): string {
    return `translateX(-${this.currentSlide * 100}%)`;
  }
}

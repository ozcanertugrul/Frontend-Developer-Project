import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NewsService } from './services/news.service';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let newsService: jasmine.SpyObj<NewsService>;

  beforeEach(async () => {
    const newsServiceSpy = jasmine.createSpyObj('NewsService', ['getTopHeadlines']);

    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [AppComponent],
      providers: [
        { provide: NewsService, useValue: newsServiceSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    newsService = TestBed.inject(NewsService) as jasmine.SpyObj<NewsService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'news-app'`, () => {
    expect(component.title).toEqual('news-app'); 
  });

  it('should fetch news on search', () => {
    const mockArticles = [{ title: 'Article 1' }, { title: 'Article 2' }];
    newsService.getTopHeadlines.and.returnValue(of({ articles: mockArticles }));

    component.onSearch();

    expect(component.articles.length).toBeGreaterThan(0);
    expect(component.articles).toEqual(mockArticles);
  });
});

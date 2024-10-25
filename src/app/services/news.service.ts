import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = '6884352bf3ac42ada7356514a38c1d88'; 
  private apiUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) {}

  getTopHeadlines(country: string, category: string, q: string, page: number, pageSize: number): Observable<any> {
    let params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('country', country)
      .set('category', category)
      .set('q', q)
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get(this.apiUrl, { params });
  }
}

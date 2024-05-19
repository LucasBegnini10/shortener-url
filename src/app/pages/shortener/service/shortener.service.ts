import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShortenerService {
  private baseUrl = 'https://cleanuri.com/api/v1/shorten';

  constructor(private httpClient: HttpClient) {}

  shortenUrl(url: string) {
    return this.httpClient.post(`${this.baseUrl}`, `url=${this.formatUrl(url)}`, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }
    });
  }

  private formatUrl(url: string) {
    return encodeURIComponent(url);
  }
}

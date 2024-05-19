import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShortenerService {
  private url = 'https://cleanuri.com/api/v1/shorten';

  constructor(private httpClient: HttpClient) {}

  shortenUrl(url: string) {
    return this.httpClient.post(`${this.url}`, { url: this.formatUrl(url) });
  }

  private formatUrl(url: string) {
    return encodeURIComponent(url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShortenerService {
  private url = 'https://ulvis.net/API/write/get';

  constructor(private httpClient: HttpClient) {}

  shortenUrl(url: string) {
    return this.httpClient.post(`${this.url}`, {}, { params: { url } });
  }
}

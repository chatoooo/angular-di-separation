import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export class DataLoader implements OnInit {

  private mData: Observable<object>;

  public get data(): Observable<object> {
    return this.mData;
  }

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.mData = this.httpClient.get('/assets/data.json');
  }

}

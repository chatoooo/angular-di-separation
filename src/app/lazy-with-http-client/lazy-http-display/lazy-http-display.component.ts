import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataLoader } from '../../data-loader';

@Component({
  selector: 'app-lazy-http-display',
  templateUrl: './lazy-http-display.component.html',
  styleUrls: ['./lazy-http-display.component.scss']
})
export class LazyHttpDisplayComponent extends DataLoader {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataLoader } from '../data-loader';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent extends DataLoader {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

}

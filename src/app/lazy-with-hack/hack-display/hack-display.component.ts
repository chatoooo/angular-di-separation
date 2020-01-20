import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataLoader } from '../../data-loader';

@Component({
  selector: 'app-hack-display',
  templateUrl: './hack-display.component.html',
  styleUrls: ['./hack-display.component.scss']
})
export class HackDisplayComponent extends DataLoader{

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

}

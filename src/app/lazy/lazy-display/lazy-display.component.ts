import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataLoader } from '../../data-loader';

@Component({
  selector: 'app-lazy-display',
  templateUrl: './lazy-display.component.html',
  styleUrls: ['./lazy-display.component.scss'],
})
export class LazyDisplayComponent extends DataLoader {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

}

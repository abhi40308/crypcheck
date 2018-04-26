import { Component, OnInit } from '@angular/core';
import { Currency } from '../shared/currency'

import { CrypdataService } from '../crypdata.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [CrypdataService],
})
export class TableComponent implements OnInit {

  currency : Currency;

  constructor( private crypdataservice: CrypdataService ) { }

  ngOnInit() {
  this.crypdataservice.getall().subscribe(data => this.currency = data);
  }

}

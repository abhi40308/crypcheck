import { Component, OnInit } from '@angular/core';
import { CrypdataService } from '../crypdata.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [CrypdataService],
})
export class TableComponent implements OnInit {

  private currency=[];

  constructor( private crypdataservice: CrypdataService ) { }

  ngOnInit() {
  this.crypdataservice.getall().subscribe(data => this.currency = data);
  }


}
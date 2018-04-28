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
  private interval: any;

  constructor( private crypdataservice: CrypdataService ) { }

  ngOnInit() {
  this.crypdataservice.getall().subscribe(data => this.currency = data);

  this.refreshData();
  this.interval = setInterval(() => { 
        this.refreshData(); 
    }, 300000);
  }

  refreshData(){
    this.crypdataservice.updateData(); 
}


}
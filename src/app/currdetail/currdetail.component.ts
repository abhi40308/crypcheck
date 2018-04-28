import { Component, OnInit } from '@angular/core';
import { CrypdataService } from '../crypdata.service'
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-currdetail',
  templateUrl: './currdetail.component.html',
  styleUrls: ['./currdetail.component.css'],
  providers: [CrypdataService],
})
export class CurrdetailComponent implements OnInit {

  public curr;

  constructor(private crypdataservice: CrypdataService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  let id = this.route.snapshot.params['id'];
  this.crypdataservice.getcurr(id).subscribe(data => this.curr = data);
  }

  goBack(): void{
  	this.location.back();
  }

}

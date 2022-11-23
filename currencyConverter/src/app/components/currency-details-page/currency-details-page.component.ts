import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-currency-details-page',
  templateUrl: './currency-details-page.component.html',
  styleUrls: ['./currency-details-page.component.css'],
})
export class CurrencyDetailsPageComponent implements OnInit {
  currencyTitle: any;
  constructor(public activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(take(1)).subscribe((data) => {
     this.currencyTitle = data["currencyTitle"];
    })
  }
}
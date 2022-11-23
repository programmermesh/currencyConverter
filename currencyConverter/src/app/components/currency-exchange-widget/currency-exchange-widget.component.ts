import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-exchange-widget',
  templateUrl: './currency-exchange-widget.component.html',
  styleUrls: ['./currency-exchange-widget.component.css']
})
export class CurrencyExchangeWidgetComponent implements OnInit {

  currencySwap1: any;
  currencySwap2: any;
  selectedEur: any;
  amount: any;

  ngOnInit() {
  this.amount = 1;
  this.currencySwap1 = 'EUR';
  this.currencySwap2 = 'USD';
  }

  onSwap(currencySwap1: any,currencySwap2:any){
    this.currencySwap1= currencySwap2;
    this.currencySwap2= currencySwap1;
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product; // property ของ app-product-alerts
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendNotify() {
    console.log(`[product-alerts] [sendNotify]`);
    this.notify.emit();
  }

}
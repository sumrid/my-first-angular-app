import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service"; // นำเข้า service

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"]
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(private cartService: CartService) {
    // นำ service ใส่เข้าไปในคลาส
  }

  ngOnInit() {
    // ดึงรูปแบบการส่ง
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}

import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service"; // นำเข้า service

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"]
})
export class ShippingComponent implements OnInit {
  shippingCosts: any;

  constructor(private cartService: CartService) {
    // นำ service ใส่เข้าไปในคลาส
  }

  async ngOnInit() {
    this.getShipping();
  }

  async getShipping() {
    // ดึงวิธีการส่ง
    this.shippingCosts = await this.cartService.getShippingPrices();
    console.log(this.shippingCosts);
  }
}

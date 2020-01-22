import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router"; // ต้องใช้เพื่อดึงข้อมูลจาก route

import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  // property and method
  
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    // ดึง params จาก route
    // this.route.paramMap.subscribe(params => {
    //   const id = params.get("productId");
    //   this.product = products[id];
    // });
    const id = this.route.snapshot.paramMap.get("productId");
    this.product = products[id];
  }

  getProduct() {
    
  }

  addToCart(product) {
    window.alert('เพิ่มสินค้าลงตะกร้า');
    this.cartService.addToCart(product);
  }
}

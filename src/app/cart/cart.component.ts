import { Component, OnInit, OnChanges } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit, OnChanges {
  items = [];
  checkoutForm;
  input: String;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    // ทำการสร้าง form model
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit() {
    // ตอนสร้าง component ให้ดึงข้อมูลมาแสดง
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    console.warn(`Your order has been submitted ${customerData}`);

    this.items = this.cartService.clearCart(); // cart ตะกร้า
    this.checkoutForm.reset(); // reset form
  }

  ngOnChanges(changes) {
    for (let key in changes) {
      console.log(key);
    }
  }
}

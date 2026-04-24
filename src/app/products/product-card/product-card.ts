import { Product } from './../product';
import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  readonly product = input.required<Product>();
  readonly addButtonLabel = input("Add to Card");

  readonly addToCart = output<Product>();

  protected onAddToCard() {
    this.addToCart.emit(this.product())
  }


}

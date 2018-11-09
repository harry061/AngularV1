import { Component, OnInit } from '@angular/core';
import { Iproduct } from './products';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: String = 'Product Detail';
  product: Iproduct;

  constructor(private _route: ActivatedRoute, public router1: Router,public _productService:ProductService) {

  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this._productService.getProduct(id).subscribe(product=>this.product=product);
  }

  onBack(): void {
    this.router1.navigate(['/products']);
  }
}

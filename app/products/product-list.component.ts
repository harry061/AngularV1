import { Component, OnInit } from '@angular/core'
import { Iproduct } from './products';
import { ProductService } from './product.service';


@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


    constructor(productService: ProductService) {
        this._productService = productService;
    }
    private _productService: ProductService;
    pageTitle: String = "Product List";
    imagewidth: number = 50;
    imagemargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: Iproduct[];
    products: Iproduct[];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
        this._productService.getProducts().subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products;
        }, error => this.errorMessage = <any>error);

    }

    performFilter(filterBy: string): Iproduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: Iproduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);

    }

    OnRatingClicked(message: string): void {
        console.log(message);
    }


}
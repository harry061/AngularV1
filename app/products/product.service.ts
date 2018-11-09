import { Injectable } from "@angular/core";
import { Iproduct } from "./products";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/do'

@Injectable()
export class ProductService {
    private productURL = './api/products/products.json';

    constructor(private _http: HttpClient) {

    }

    getProduct(id: number): Observable<Iproduct> {
        return this.getProducts().map((products: Iproduct[]) => products.find(p => p.productId === id));
    }

    getProducts(): Observable<Iproduct[]> {
        return this._http.get<Iproduct[]>(this.productURL).do(data => console.log('all: ' + JSON.stringify(data))).catch(this.handleError);
    }

    handleError(err: HttpErrorResponse) {
        console.log(err);
        return Observable.throw(err.message);
    }

}
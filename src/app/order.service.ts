import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Order} from './oreder'


@Injectable()
export class OrderService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) {
  }

 getOrderLists(){
   const url = "https://5ff404fa16cf4f0017c1f9cc.mockapi.io/api/lists";
   const endpoint="/orderlists"
   return this.http.get(`${url}${endpoint}`);
 }
 orderDetails(id:any){
    const url = "https://5ff404fa16cf4f0017c1f9cc.mockapi.io/api/lists/order_details";
    const gt_url = `${url}/${id}`
    return this.http.get(`${gt_url}`);
 }

  getHero(id: number): Promise<Order> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Order)
        .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
  }

  create(name: string): Promise<Order> {
    return this.http
        .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
        .toPromise()
        .then(res => res.json().data as Order)
        .catch(this.handleError);
  }

  update(hero: Order): Promise<Order> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
        .put(url, JSON.stringify(hero), { headers: this.headers })
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}


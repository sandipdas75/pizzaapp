import { Component,OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {Order} from '../oreder';
import {OrderService} from '../order.service';


@Component({
  selector: 'order-lists',
  templateUrl: './order-lists.component.html',
  styleUrls: ['./order-lists.component.css']
})
export class OrderListsComponent implements OnInit {
  title = 'Order Lists';
  // orderLists:any=[];
  data=[
    {
    "customer_Name":"Sanchi",
    "no_items_ordered":"10",
    "amount":"3000",
    "status":"Order Received",
    "id":"1",
  },
  {
    "customer_Name":"John",
    "no_items_ordered":"1",
    "amount":"340",
    "status":"Preparing",
    "id":"2",
  },
  {
    "customer_Name":"Smith",
    "no_items_ordered":"3",
    "amount":"540",
    "status":"Ready to serve",
    "id":"3",
  },
  {
    "customer_Name":"Mohan",
    "no_items_ordered":"4",
    "amount":"540",
    "status":"Ready to serve",
    "id":"4",
  },
  {
    "customer_Name":"Jivan",
    "no_items_ordered":"5",
    "amount":"1240",
    "status":"Preparing",
    "id":"5",
  },

]
orderLists:any=[];
constructor(private router:Router,private orderService:OrderService){

}
  ngOnInit(){
   // this.orderLists = this.data;

    this.orderService.getOrderLists().toPromise().then((resp:any)=>{
      console.log('ddd',resp.json())
      const arrItems= resp.json();
      this.orderLists = arrItems.lists;
      console.log('orderLists',this.orderLists)
    })
  }
  changeStatus(item:any){
    console.log('id',item.id)
    this.router.navigate(['/detail',item.id])
  }
}

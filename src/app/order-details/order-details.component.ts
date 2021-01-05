import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {OrderService} from '../order.service';


@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  title = 'Order Details';
  id:any;
  result:any;
  constructor(private route: ActivatedRoute,private orderService:OrderService){

  }
  ngOnInit(){
    this.id= this.route.snapshot.paramMap.get('id');
        console.log('id',this.id)
    this.orderService.orderDetails(this.id).toPromise().then((resp:any)=>{
      console.log('ddd',resp.json())
      const arrItems= resp.json();
      this.result = arrItems.lists;
      console.log('result',this.result)
    })
  }
}

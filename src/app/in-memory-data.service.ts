import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
    customer_Name:"Sanchi",
    no_items_ordered:'10',
    amount:"3000",
    status:"Order Received",
    id:"1",
  },
  {
    customer_Name:"John",
    no_items_ordered:'1',
    amount:"340",
    status:"Preparing",
    id:"2",
  },
  {
    customer_Name:"Smith",
    no_items_ordered:'3',
    amount:"540",
    status:"Ready to serve",
    id:"3",
  },
  {
    customer_Name:"Mohan",
    no_items_ordered:'3',
    amount:"540",
    status:"Ready to serve",
    id:"4",
  },
  {
    customer_Name:"Jivan",
    no_items_ordered:'4',
    amount:"1240",
    status:"Preparing",
    id:"5",
  },
  {
    customer_Name:"Jhonty",
    no_items_ordered:'3',
    amount:"540",
    status:"Ready to serve",
    id:"6",
  },
  {
    customer_Name:"Lara",
    no_items_ordered:'5',
    amount:"540",
    status:"Order Received",
    id:"7",
  }
    ];
    return { heroes };
  }
}

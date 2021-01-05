import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderListsComponent } from './order-lists/order-lists.component';



const routes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  {path:'lists',component:OrderListsComponent},
  {path:'detail/:id',component:OrderDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

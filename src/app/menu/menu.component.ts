import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/services/menu.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ShoppingcartService } from '../shared/services/shoppingcart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes$: Observable<any>;

  constructor(private menuService: MenuService, private shoppingcartService: ShoppingcartService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.dishes$ = this.menuService.getDishes();
  }

  addToShoppingcart(dishes) {
    this.shoppingcartService.addToShoppingcart(dishes);
  }
}

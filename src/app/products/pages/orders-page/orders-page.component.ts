import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styles: ``
})
export class OrdersPageComponent {
  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Deardevile',
      canFly: false,
      color: Color.red
    }
  ]
  public orderBy?: keyof Hero;

  public toggleUppercase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public changeOrderBy(order: keyof Hero): void {
    this.orderBy = order;
  }
}

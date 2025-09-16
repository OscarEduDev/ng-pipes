import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  public name: string = "Oscar";
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }
  public clientsMap: { [key: string]: string } = {
    "=0": "no tenemos clientes",
    "=1": "tenemos un cliente",
    "other": "tenemos # clientes"
  }
  public me = {
    name: 'Oscar',
    age: 28,
    address: 'Quito y Bolivar'
  }
  public observable: Observable<number> = interval(2000)
    .pipe(
      tap(number => console.log('number: ', number))
    )

  public myPromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promise')
      console.log('Tenemos data en la promise');
      this.name = 'Edu'
    }, 2000)
  })

  public clients: string[] = ['Oscar', 'Wendy', 'Eduardo', 'Angel', 'Jhoana', 'Cinthya', 'Mike']

  public changeClient(): void {
    this.name = 'Wendy';
    this.gender = 'female';
  }

  public deleteClient(): void {
    this.clients.shift();
  }
}

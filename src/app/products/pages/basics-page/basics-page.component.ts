import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'Oscar';
  public nameUppercase: string = 'OSCAR';
  public fullNameTitlecase: string = 'osCaR PiLlAjO';
  public currentDate: Date = new Date();
}

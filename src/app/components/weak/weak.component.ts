import { Component } from '@angular/core';

@Component({
  selector: 'app-weak',
  templateUrl: './weak.component.html',
  styleUrls: ['./weak.component.scss']
})
export class WeakComponent {
  public weak = [
    {
      desc: 'Perfectionism',
    },
    {
      desc: 'Analytics'
    }
  ]
}

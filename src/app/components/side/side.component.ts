import { Component } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent {
  public side = [
    {
      desc: 'Analytics',
    },
    {
      desc: 'Perfectionism',
    },
    {
      desc: 'Analytics'
    }
  ]
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progres',
  templateUrl: './progres.component.html',
  styleUrls: ['./progres.component.scss']
})
export class ProgresComponent {
  @Input() progres = '0%'; 
}

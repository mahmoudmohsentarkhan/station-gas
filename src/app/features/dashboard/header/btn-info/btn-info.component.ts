import { Component, input } from '@angular/core';

@Component({
  selector: 'btn-info',
  standalone: true,
  imports: [],
  templateUrl: './btn-info.component.html',
  styleUrl: './btn-info.component.scss'
})
export class BtnInfoComponent {
  info = input.required<{img:string,label:string, subTitle:string}>()
}

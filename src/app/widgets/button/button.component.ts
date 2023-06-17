import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant?: "light" | "dark";
  @Input() rounded?: boolean;
  @Input() size?: "xs" | "s" | "m" | "l" | "xl";

  
 ngOnInit(): void {

  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent {
  @Input() size?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl" | "xxxxl" = 'm';
  @Input() weight?: "regular" | "semibold" | "bold" = 'regular';
  @Input() color?: string;
}

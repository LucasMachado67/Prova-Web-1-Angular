import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-navigation',
  imports: [],
  templateUrl: './button-navigation.html',
  styleUrl: './button-navigation.scss',
})
export class ButtonNavigation {

  @Input() title: string = "title"

}

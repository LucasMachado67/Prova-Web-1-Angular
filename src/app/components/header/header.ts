import { Component } from '@angular/core';
import { ButtonNavigation } from '../button-navigation/button-navigation';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [ButtonNavigation, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  text: string = "Tasks Tracker"
}

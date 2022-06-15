import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import {
  faLightbulb as faSolidLightbulb,
  faDollarSign,
  IconDefinition,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb as faRegularLightbulb } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faLightbulb: IconDefinition = faRegularLightbulb;
  faDollarSign = faDollarSign;
  faMoon = faMoon;
  toggle = 'light';
  constructor(
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.setLightbulb();
  }

  setLightbulb() {
    if (this.themeService.isDarkTheme()) {
      this.faLightbulb = faRegularLightbulb;
    } else {
      this.faLightbulb = faSolidLightbulb;
    }
  }

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
      this.toggle = 'light';
    } else {
      this.themeService.setDarkTheme();
      this.toggle = 'dark';
    }
    this.setLightbulb();
  }


}

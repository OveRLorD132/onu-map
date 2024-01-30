import { Component } from "@angular/core";

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})

export class SearchInput {
  isFocused = false;
  showOutline = () => this.isFocused = true;
  hideOutline = () => this.isFocused = false;
}
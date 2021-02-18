import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [`
    p {
      color:red;
      font-size:20x;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

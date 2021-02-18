import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `

    <p [style.fontSize.px]="tamano">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Iure temporibus ab repudiandae debitis quis et maxime
      atque repellendus velit labore.
    </p>

    <button class="btn btn-primary m-1" (click)="tamano = tamano + 5">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>

    <button class="btn btn-primary m-1" (click)="tamano = tamano - 5">
      <i class="fa fa-minus" aria-hidden="true"></i>
    </button>

  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano = 40;

  constructor() { }

  ngOnInit() {
  }

}

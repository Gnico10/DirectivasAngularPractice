import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styles: []
})
export class ClassComponent implements OnInit {

  alerta = 'alert-danger';
  loading = false;

  propiedades = {
    danger: false
  };


  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}

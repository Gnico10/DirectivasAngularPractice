import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef) {
    console.log('directiva llamada');

    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  // Declaración de Input
  @Input('appResaltado') nuevoColor: string;

  // Manejo de eventos
  @HostListener('mouseenter') mouseEntro() {
    this.resaltar( this.nuevoColor || 'yellow');
    // this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar( null );
  }

  private resaltar( color: string ) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

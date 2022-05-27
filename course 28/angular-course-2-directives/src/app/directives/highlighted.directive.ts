import { Directive, HostBinding, HostListener, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

// Selector di bawah merupakan atribut dari suatu komponen, hanya bisa digunakan sebagai atribut saja
@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor() {
    console.log("Directive created..");
  }

  // Host Binding untuk set DOM property: class.highlighted style.border (variabel yang digenerate oleh browser)
  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  // Mengganti atribut dari suatu DOM (yaitu penambahan deklarasi variabel)
  @HostBinding('attr.disabled')
  get disabled() {
    return "true";
  }

  // Host Listener, menerima event dari DOM untuk melakukan suatu perubahan, bisa dilakukan penambahan args untuk inject objek ke function
  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    console.log($event);
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }
}

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {

  // Allow decimal numbers. The \. is only allowed once to occur
  private regex: RegExp = new RegExp(/^\d+(\.\d+)*$/g);

      // Allow key codes for special events. Reflect :
      // Backspace, tab, end, home
      private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home', 'Delete', '.' ];

      constructor(private el: ElementRef) {
      }

      @HostListener('keydown', [ '$event' ])
      onKeyDown(event: KeyboardEvent): void {
          // Allow Backspace, tab, end, and home keys
          if (this.specialKeys.indexOf(event.key) !== -1) {
              return;
          }
          const current: string = this.el.nativeElement.value;
          const next: string = current.concat(event.key);
          if (next && !String(next).match(this.regex)) {
              event.preventDefault();
          }
      }
}

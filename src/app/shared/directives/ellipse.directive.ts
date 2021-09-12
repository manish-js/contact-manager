import {
    AfterViewInit,
    Directive,
    ElementRef,
    Inject,
    PLATFORM_ID,
    Input
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
    selector: '[appEllipsis]'
})
export class EllipsisDirective implements AfterViewInit {

    @Input('appEllipsis') charSize: number;
    /**
     * Ellipsis charater
     */
    private ellipsisChar = '…';

    private defaultCharSize = 100;

    /**
     * Creates an instance of EllipsisDirective.
     */
    constructor(
        private el: ElementRef,
        @Inject(PLATFORM_ID) private platformId,
    ) { }

    /**
     * Clip text on component initialisation
     *
     */
    public ngAfterViewInit(): void {
        this.charSize = this.charSize ? this.charSize : this.defaultCharSize;
        this.clipText();
    }
    /**
     *
     * add ellipsis symbol to the end of the text after charSize character
     */
    private clipText(): void {

        const el: HTMLElement = this.el.nativeElement;
        if (el.innerText !== '' && el.innerText.length > this.charSize) {
            const text = el.innerText;
            const elText = el.innerText.substr(0, this.charSize);
            // tslint:disable-next-line:quotemark
            el.innerHTML = "<span>" + elText + "</span><span style='font-weight:bold'>" + this.ellipsisChar + "</span>";
            el.title = text;
        }
    }

}

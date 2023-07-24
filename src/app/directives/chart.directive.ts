import { Directive, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Directive({
    selector: '[Chartdr]'
})

export class ChartDirective implements OnInit, OnChanges {
    @Input() chartValue: any
    @HostBinding('style.background-image') bgimg = `conic-gradient(
        orange 90deg,
        red 0
    )`
    ngOnInit(): void {
        this.bgimg = this.chartValue
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.bgimg = this.chartValue
    }
} 
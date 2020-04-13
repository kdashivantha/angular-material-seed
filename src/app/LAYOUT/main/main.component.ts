import { Component, OnInit, AfterViewInit, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    host: {
        'class': 'mat-typography'
    }
})
export class MainComponent implements OnInit, AfterViewInit {
    @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

    private _sideNavMode: string = "side";
    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        setTimeout(
            () => this._setSideNave(window)
            ,100);
    }
    @HostListener('window:resize', ['$event'])
    private onResize(event) {
        this._setSideNave(event.target);
    }

    @HostListener('window:ready', ['$event'])
    private onLoad(event) {
        this._setSideNave(event.target);
    }
    private _setSideNave(target) {
        if (target.innerWidth < 960) {
            this._sideNavMode = "over";
            if (this.sidenav.opened)
                this.sidenav.close();
        }
        else {
            this._sideNavMode = "side";
            if (!this.sidenav.opened)
                this.sidenav.open();
        }
    }

    public get SideNavMode(): string {
        return this._sideNavMode;
    }
}
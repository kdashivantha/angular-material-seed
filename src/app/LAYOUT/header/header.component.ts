import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter();
  private _sidebarOpened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Toggle the sidenav menu.
   */
  toggleSidenav() {
      this._sidebarOpened = !this._sidebarOpened;
      this.toggleSidebar.emit(this._sidebarOpened);
  }

}
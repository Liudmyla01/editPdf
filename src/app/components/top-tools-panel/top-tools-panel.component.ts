import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-tools-panel',
  templateUrl: './top-tools-panel.component.html',
  styleUrls: ['./top-tools-panel.component.scss']
})
export class TopToolsPanelComponent implements OnInit {
public file:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}

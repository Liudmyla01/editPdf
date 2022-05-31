import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools-nav',
  templateUrl: './tools-nav.component.html',
  styleUrls: ['./tools-nav.component.scss']
})
export class ToolsNavComponent implements OnInit {
public tool:string = 'Elements';
public allTools:any= [
  {
    name:'Elements',
    src:'assets/elements.svg',
  },
  {
    name:'Text',
    src:'assets/text.svg',
  },
  {
    name:'Images',
    src:'assets/images.svg',
  },
  {
    name:'Background',
    src:'assets/bg-ico.svg',
  }
  
];

  constructor() { }

  ngOnInit(): void {
  }

  showToolsPanel(e:any){
   this.tool = e.name
  }

}

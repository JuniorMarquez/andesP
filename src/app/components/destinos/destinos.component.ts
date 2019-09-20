import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.css']
})
export class DestinosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 $.getScript('assets/themekit/scripts/glide.min.js');
  }

}

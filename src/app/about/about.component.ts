import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  myScriptElement: HTMLScriptElement;
  constructor() {
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = 'assets/js/main.js';
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angtwo';
  conta: number = 0


  constructor(){}
  increase(){
    this.conta++;
  }

  decrease(){
    this.conta--;
  }
}



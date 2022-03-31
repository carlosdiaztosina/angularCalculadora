import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  text1="1";
  text2="2";
  concat='X';
  concat2:Number=0;

  concatenate():void{
    this.concat =this.text1 + this.text2;
  }
  suma():void{
    this.concat2 =Number(this.text1) + Number(this.text2);
  }
  resta():void{
    this.concat2 =Number(this.text1) - Number(this.text2);
  }
  multi():void{
    this.concat2 =Number(this.text1) * Number(this.text2);
  }
  divi():void{
    this.concat2 =Number(this.text1) / Number(this.text2);
  }
}

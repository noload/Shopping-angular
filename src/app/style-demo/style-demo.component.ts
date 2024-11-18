import { Component } from '@angular/core';

@Component({
  selector: 'app-style-demo',
  templateUrl: './style-demo.component.html',
  styleUrl: './style-demo.component.css'
})
export class StyleDemoComponent {
  public bgStyle:string='red';
  public textStyle:string='white';
  public padding:string='0';
  public fontSize:string='0';

  public styleObj:{
    'background-color':string,
    'color':string,
    'padding':string,
    'font-size':string
  }={
    'background-color':'red',
    'color':'white',
    'padding':this.padding+"px",
    'font-size':this.fontSize+"px"
  }

  applyStyle(){

    this.styleObj={
      'background-color':this.bgStyle,
      'color':this.textStyle,
      'font-size':this.fontSize+"px",
      'padding':this.padding+"px"
    }
  }
}

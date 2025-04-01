import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from "../child/child.component";
import { log } from 'node:util';

@Component({
  selector: 'app-parent',
  imports: [FormsModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  name:string='';
  gMail:any='';
  mOrF:string='';
  @ViewChild(ChildComponent) G:any;
  ngAfterViewChecked() {
    this.mOrF = this.G.gender;
  }
  
}

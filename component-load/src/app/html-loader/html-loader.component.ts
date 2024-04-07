import { Component } from '@angular/core';

@Component({
  selector: 'app-html-loader',
  standalone: true,
  imports: [],
  templateUrl: './html-loader.component.html',
  styleUrl: './html-loader.component.css'
})
export class HtmlLoaderComponent {
  rawHtml="";
  GetHtml(){return this.rawHtml="<div>my rawhtml</div>";}
}

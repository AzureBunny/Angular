import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HtmlLoaderComponent } from './html-loader/html-loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HtmlLoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'component-load';
}

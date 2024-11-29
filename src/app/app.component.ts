import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { CreatePostComponent } from "./pages/create-post/create-post.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, CreatePostComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BlogSphere';
}

import { Component } from '@angular/core';
import { DashboardModule, SidebarComponent } from '@app/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent,DashboardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task';
}

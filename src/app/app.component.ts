import { Component } from '@angular/core';
import {} from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { useOffline } from 'src/shared/navigator/useOffline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [],
})
export class AppComponent {
  title = 'useOffline';

  constructor() {}
}

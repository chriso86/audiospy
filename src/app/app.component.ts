import {Component} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  loaded: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  isLoading: boolean = false;
}

import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-destroy-example',
  standalone: true,
  imports: [],
  templateUrl: './destroy-example.component.html',
  styleUrl: './destroy-example.component.scss',
})
export class DestroyExampleComponent implements OnDestroy {
  subscription: Subscription;
  countdown: number = 5;

  constructor() {
    // Example: Subscribing to an observable
    this.subscription = interval(1000).subscribe(() => {
      this.countdown--;

      if (this.countdown === 0) {
        // Simulate component destruction after 5 seconds
        this.ngOnDestroy();
      }
    });
  }

  ngOnDestroy() {
    // Cleanup tasks before the component is destroyed
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
      console.log('Unsubscribed from the observable.');
    }

    console.log('ngOnDestroy called. Component is about to be destroyed.');
  }
}

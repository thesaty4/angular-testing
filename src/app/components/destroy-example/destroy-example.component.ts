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

  /**
   * Lifecycle hook called just before the component is destroyed.
   * @method
   * @memberof ExampleComponent
   */
  ngOnDestroy() {
    // Cleanup tasks before the component is destroyed
    if (this.subscription && !this.subscription.closed) {
      /**
       * Unsubscribes from the observable to prevent memory leaks.
       * @function
       * @memberof ExampleComponent
       */
      this.subscription.unsubscribe();

      /**
       * Logs a message indicating successful unsubscription from the observable.
       * @function
       * @name console.log
       * @param {string} message - The log message.
       */
      console.log('Unsubscribed from the observable.');
    }

    /**
     * Logs a message indicating that the ngOnDestroy lifecycle hook has been called and the component is about to be destroyed.
     * @function
     * @name console.log
     * @param {string} message - The log message.
     */
    console.log('ngOnDestroy called. Component is about to be destroyed.');
  }
}

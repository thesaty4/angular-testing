import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-after-view-init-example',
  standalone: true,
  imports: [],
  templateUrl: './after-view-init-example.component.html',
  styleUrl: './after-view-init-example.component.scss',
})
export class AfterViewInitExampleComponent implements AfterViewInit {
  // ViewChild decorator is used to get a reference to the paragraph element in the template
  @ViewChild('viewInitParagraph') viewInitParagraph!: ElementRef;

  /**
   * Lifecycle hook called after the component's view has been initialized.
   * @method
   * @memberof ExampleComponent
   */
  ngAfterViewInit() {
    /**
     * Logs a message indicating that the ngAfterViewInit lifecycle hook has been called.
     * @function
     * @name console.log
     * @param {string} message - The log message.
     */
    console.log('ngAfterViewInit called');

    // Access the view elements after they have been initialized
    if (this.viewInitParagraph) {
      /**
       * Logs the completion of view initialization and the text content of the viewInitParagraph element.
       * @function
       * @name console.log
       * @param {string} message - The log message.
       * @param {string} status - The status message indicating view initialization completion.
       * @param {string} content - The text content of the viewInitParagraph element.
       */
      console.log(
        'View initialization complete. Text content:',
        this.viewInitParagraph.nativeElement.textContent
      );
    }
  }
}

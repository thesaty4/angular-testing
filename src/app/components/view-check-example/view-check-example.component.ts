import { AfterViewChecked, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-check-example',
  standalone: true,
  imports: [],
  templateUrl: './view-check-example.component.html',
  styleUrl: './view-check-example.component.scss',
})
export class ViewCheckExampleComponent implements AfterViewChecked {
  // ElementRef is used to access the native element of the paragraph
  constructor(private elementRef: ElementRef) {}

  /**
   * Lifecycle hook called after Angular has checked the component's view and its child views.
   * @method
   * @memberof ExampleComponent
   */
  ngAfterViewChecked() {
    /**
     * Logs a message indicating that the ngAfterViewChecked lifecycle hook has been called.
     * @function
     * @name console.log
     * @param {string} message - The log message.
     */
    console.log('ngAfterViewChecked called');

    // Access the view elements after they have been checked
    const viewCheckParagraph = this.elementRef.nativeElement.querySelector(
      '#viewCheckParagraph'
    );
    if (viewCheckParagraph) {
      /**
       * Logs the completion of view checking and the text content of the viewCheckParagraph element.
       * @function
       * @name console.log
       * @param {string} message - The log message.
       * @param {string} status - The status message indicating view checking completion.
       * @param {string} content - The text content of the viewCheckParagraph element.
       */
      console.log(
        'View checked. Text content:',
        viewCheckParagraph.textContent
      );
    }
  }
}

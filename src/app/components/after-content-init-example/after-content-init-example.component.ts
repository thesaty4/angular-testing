import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-after-content-init-example',
  standalone: true,
  imports: [],
  templateUrl: './after-content-init-example.component.html',
  styleUrl: './after-content-init-example.component.scss',
})
export class AfterContentInitExampleComponent implements AfterContentInit {
  @ContentChild('contentParagraph') contentParagraph!: ElementRef;

  /**
   * Lifecycle hook called after the content projected through <ng-content> has been initialized.
   * @method
   * @memberof ExampleComponent
   */
  ngAfterContentInit() {
    /**
     * Logs a message indicating that the ngAfterContentInit lifecycle hook has been called.
     * @function
     * @name console.log
     * @param {string} message - The log message.
     */
    console.log('ngAfterContentInit called');

    // Access content projected through <ng-content>
    if (this.contentParagraph) {
      /**
       * Logs the content of the contentParagraph element projected through <ng-content>.
       * @function
       * @name console.log
       * @param {string} message - The log message.
       * @param {string} content - The text content of the contentParagraph element.
       */
      console.log(
        'Content paragraph:',
        this.contentParagraph.nativeElement.textContent
      );
    }
  }
}

import {
  AfterContentChecked,
  Component,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-after-content-checked-example',
  standalone: true,
  imports: [],
  templateUrl: './after-content-checked-example.component.html',
  styleUrl: './after-content-checked-example.component.scss',
})
export class AfterContentCheckedExampleComponent
  implements AfterContentChecked
{
  @ContentChild('contentParagraph') contentParagraph!: ElementRef;

  /**
   * Lifecycle hook called after Angular has checked the content projected through <ng-content>.
   * @method
   * @memberof ExampleComponent
   */
  ngAfterContentChecked() {
    /**
     * Logs a message indicating that the ngAfterContentChecked lifecycle hook has been called.
     * @function
     * @name console.log
     * @param {string} message - The log message.
     */
    console.log('ngAfterContentChecked called');

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

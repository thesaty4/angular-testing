import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AfterContentInitExampleComponent } from '../after-content-init-example/after-content-init-example.component';
import { AfterContentCheckedExampleComponent } from '../after-content-checked-example/after-content-checked-example.component';
import { AfterViewInitExampleComponent } from '../after-view-init-example/after-view-init-example.component';
import { ViewCheckExampleComponent } from '../view-check-example/view-check-example.component';
import { DestroyExampleComponent } from '../destroy-example/destroy-example.component';

@Component({
  selector: 'app-life-cycle-hooks',
  standalone: true,
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.scss',
  imports: [
    AfterContentInitExampleComponent,
    AfterContentCheckedExampleComponent,
    AfterViewInitExampleComponent,
    ViewCheckExampleComponent,
    DestroyExampleComponent,
  ],
})
export class LifeCycleHooksComponent implements OnChanges, OnInit {
  /**
   * Input property to receive text from the parent component.
   * @property {string} inputText - The input text.
   */
  @Input() inputText!: string;

  /**
   * Lifecycle hook called when the input properties of the component change.
   * @method
   * @param {SimpleChanges} changes - Object containing the changed properties.
   */
  ngOnChanges(changes: SimpleChanges) {
    console.log('Input property changed:', changes['inputText'].currentValue);
  }

  /**
   * Lifecycle hook called after the component has been initialized.
   * @method
   */
  ngOnInit() {
    console.log('Component initialized!');
  }

  /**
   * Array of items in the component.
   * @property {string[]} items - Array containing items.
   */
  items = ['Item 1', 'Item 2', 'Item 3'];

  /**
   * Private property to store the length of items during change detection.
   * @property {number} previousItemsLength - The previous length of the items array.
   * @private
   */
  private previousItemsLength = 0;

  /**
   * Lifecycle hook called during every change detection cycle.
   * @method
   */
  ngDoCheck() {
    console.log('ngDoCheck called');
    // Custom change detection logic goes here
    // For example, you might want to check if the number of items has changed
    if (this.items.length !== this.previousItemsLength) {
      console.log('Items changed');
      // Perform additional logic, if needed
    }
    this.previousItemsLength = this.items.length;
  }

  // ngAfterContentInit(){}
}

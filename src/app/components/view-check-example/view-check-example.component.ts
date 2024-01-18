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

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');

    // Access the view elements after they have been checked
    const viewCheckParagraph = this.elementRef.nativeElement.querySelector(
      '#viewCheckParagraph'
    );
    if (viewCheckParagraph) {
      console.log(
        'View checked. Text content:',
        viewCheckParagraph.textContent
      );
    }
  }
}

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

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');

    // Access the view elements after they have been initialized
    if (this.viewInitParagraph) {
      console.log(
        'View initialization complete. Text content:',
        this.viewInitParagraph.nativeElement.textContent
      );
    }
  }
}

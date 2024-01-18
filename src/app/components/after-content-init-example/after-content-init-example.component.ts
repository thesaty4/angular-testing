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

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');

    // Access content projected through <ng-content>
    if (this.contentParagraph) {
      console.log(
        'Content paragraph:',
        this.contentParagraph.nativeElement.textContent
      );
    }
  }
}

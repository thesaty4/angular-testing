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

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');

    // Access content projected through <ng-content>
    if (this.contentParagraph) {
      console.log(
        'Content paragraph:',
        this.contentParagraph.nativeElement.textContent
      );
    }
  }
}

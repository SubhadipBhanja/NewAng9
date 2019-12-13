import { Component } from '@angular/core';

import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sampleNewApp';
  untrustedURL: string;

  genuineURL: SafeUrl;

  untrustedVideoURL: string;
  genuineVideoURL: SafeResourceUrl;
  sampleVideoUrl: string;

  constructor(private sanitizer: DomSanitizer) {
    this.untrustedURL = 'javascript:alert("Hi...is this angular 8")';

    this.genuineURL = this.sanitizer.bypassSecurityTrustUrl(this.untrustedURL);

    this.sampleVideoUrl = "2dAk1D-kb28";

    this.untrustedVideoURL = 'https://www.youtube.com/embed/' + this.sampleVideoUrl;

    this.genuineVideoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.untrustedVideoURL);
  }

}

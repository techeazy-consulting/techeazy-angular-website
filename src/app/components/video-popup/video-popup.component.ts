import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-popup',
  templateUrl: './video-popup.component.html',
  styleUrl: './video-popup.component.css'
})
export class VideoPopupComponent {
  // videoId: string[] = [
  //   'A4-yVIXvJQE','FUkrbMlyUVc','b5SUxrMDOuE','3Cn_0rbBkfU','yxTQUS1kOGA','12ubKhrmJOo','emKldnLCSg4','bk9TqCI7iK4','pTwnFwm49w0'
  // ]; 
  videoId: string = 'A4-yVIXvJQE';
  isVisible: boolean = false;
  videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.setVideoUrl();
  }

  setVideoUrl() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.videoId}`
    );
  }

  openPopup() {
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
  }
  
}

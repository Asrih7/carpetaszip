import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

/**
 * Generated class for the VideoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'video',
})
export class VideoPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

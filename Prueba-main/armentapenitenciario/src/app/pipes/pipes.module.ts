import { NgModule } from '@angular/core';
//import { SafeUrlPipe } from './safe-url';
import { SafeHtmlPipe } from './safe-html';
//import { VideoPipe } from './video';

@NgModule({
	declarations: [
	//SafeUrlPipe,
    SafeHtmlPipe
	],
	imports: [],
	exports: [
	//SafeUrlPipe,
	//VideoPipe,
	SafeHtmlPipe
	]
})
export class PipesModule {}

import { FlipbookBookmarksPopover } from "./bookmarks-popover";
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    FlipbookBookmarksPopover
  ],
  imports: [
    IonicPageModule.forChild(FlipbookBookmarksPopover)
  ],
  exports: [
    FlipbookBookmarksPopover
  ]
})
export class FlipbookBookmarksPopoverModule {}
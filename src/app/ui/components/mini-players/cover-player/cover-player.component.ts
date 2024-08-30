import { Component, ViewEncapsulation } from '@angular/core';
import { AppearanceServiceBase } from '../../../../services/appearance/appearance.service.base';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CoverPlayerPlaybackQueueComponent } from './cover-player-playback-queue/cover-player-playback-queue.component';
import { CoverPlayerVolumeControlComponent } from './cover-player-volume-control/cover-player-volume-control.component';

@Component({
    selector: 'app-cover-player',
    host: { style: 'display: block' },
    templateUrl: './cover-player.component.html',
    styleUrls: ['./cover-player.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CoverPlayerComponent {
    public constructor(
        public appearanceService: AppearanceServiceBase,
        private _bottomSheet: MatBottomSheet,
    ) {}

    public openPlaybackQueue(): void {
        this._bottomSheet.open(CoverPlayerPlaybackQueueComponent);
    }

    public openVolumeControl(): void {
        this._bottomSheet.open(CoverPlayerVolumeControlComponent);
    }
}

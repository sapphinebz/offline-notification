import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { useOffline } from 'src/shared/navigator/useOffline';

@Component({
  selector: 'app-offline-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offline-card.component.html',
  styleUrls: ['./offline-card.component.scss'],
})
export class OfflineCardComponent implements OnInit, OnDestroy {
  isOffline = false;
  subscription?: Subscription;
  @HostBinding('class.offline') get _classOffline() {
    return this.isOffline;
  }

  @HostBinding('class.online') get _classOnline() {
    return !this.isOffline;
  }

  constructor() {
    this.subscription = useOffline().subscribe((isOffline) => {
      this.isOffline = isOffline;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UnsubscribeService {

/**
 * Unsubscribing the subscriber
 * @param observer: Subscription
 */
  unsubscribeObservable(observer: Subscription[]): void {
    if (Array.isArray(observer) && observer.length) {
      observer.forEach(subscription => {
        if (subscription) {
          subscription.unsubscribe();
        }
      });
    }
  }
}

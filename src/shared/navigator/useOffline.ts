import { Observable } from 'rxjs';

export function useOffline() {
  return new Observable<boolean>((subscriber) => {
    subscriber.next(!navigator.onLine);

    const offlineHandler = (e: Event) => {
      subscriber.next(true);
    };
    window.addEventListener('offline', offlineHandler);

    const onlineHandler = (e: Event) => {
      subscriber.next(false);
    };
    window.addEventListener('online', onlineHandler);

    return {
      unsubscribe: () => {
        window.removeEventListener('offline', offlineHandler);
        window.removeEventListener('online', onlineHandler);
      },
    };
  });
}

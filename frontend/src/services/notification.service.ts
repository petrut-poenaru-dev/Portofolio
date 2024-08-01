import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn:'root'
})
export class NotificationService{
  public notification!:string;
  public isActiveNotification$ = new BehaviorSubject(false);
  public notificationType$ = new BehaviorSubject('error');
  public notificationMessage$ = new BehaviorSubject('');

  public succes(message:string){
    this.isActiveNotification$.next(true);
    this.notificationType$.next('succes');
    this.notificationMessage$.next(message);
    setTimeout( () => {
      this.isActiveNotification$.next(false);
    },2000)
  }

  public error(message:string){
    this.isActiveNotification$.next(true);
    this.notificationType$.next('error');
    this.notificationMessage$.next(message);
    setTimeout( () => {
      this.isActiveNotification$.next(false);
    },2000)
  }
}

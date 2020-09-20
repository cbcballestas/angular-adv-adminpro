import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();

  constructor() {
    // this.subscription.add(
    //   this.retornaObservable()
    //     .pipe(retry(1))
    //     .subscribe(
    //       (valor) => console.log('Subs: ', valor),
    //       (err) => console.warn('Error: ', err),
    //       () => console.info('Obs terminado') // se hace el complete
    //     )
    // );

    this.subscription.add(this.retornaIntervalo().subscribe(console.log));
  }
  ngOnInit(): void {}

  retornaIntervalo(): Observable<number> {
    return interval(500).pipe(
      take(10),
      map((value) => value + 1),
      filter((value) => (value % 2 === 0 ? true : false))
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete(); // Finaliza el observable
        }

        if (i === 2) {
          i = 0;
          observer.error('i llegó al valor de 2');
        }
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

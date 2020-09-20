import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css'],
})
export class PromesasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getUsuarios().then((usuarios) => console.log(usuarios));
    // const promesa = new Promise((resolve, reject) => {
    //   const n = -1;
    //   if (n > 0) {
    //     resolve('Hola mundo');
    //   } else {
    //     reject('Algo salió mal');
    //   }
    // });
    // promesa.then((data) => console.log(data)).catch((err) => console.log(err));
    // console.log('Fin del init');
  }

  getUsuarios() {
    const promesa = new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((res) => res.json())
        .then(({ data }) => resolve(data));
    });

    return promesa;
  }
}

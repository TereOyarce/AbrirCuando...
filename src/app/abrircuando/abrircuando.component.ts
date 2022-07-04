import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-abrircuando',
  templateUrl: './abrircuando.component.html',
  styleUrls: ['./abrircuando.component.css']
})
export class AbrircuandoComponent implements OnInit {
letters : any;
  constructor( private http : HttpClient, private Servicio : ServicioService) {
    this.Servicio.getLetters(this.letters).subscribe((res )=>
    {
     this.letters = res
    console.log(this.letters)}
    );

   }

  ngOnInit(): void {


  }
}

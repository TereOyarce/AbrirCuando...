import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicioService } from '../servicio.service';
import { NgbActiveModal,NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-abrircuando',
  templateUrl: './abrircuando.component.html',
  styleUrls: ['./abrircuando.component.css']
})
export class AbrircuandoComponent implements OnInit {
letters : any;
text : string = "";
image :any = "../assets/icons8-sobre-de-amor-50.png";

closeResult = '';

  constructor( private http : HttpClient, private Servicio : ServicioService, private modalService: NgbModal) {
    this.Servicio.getLetters(this.letters).subscribe((res )=>
    {
     this.letters = res
    console.log(this.letters)}
    );

   }
   open(content : any) {
    this.modalService.open(content, { centered: true }).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log('cerro');

    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {


  }
}

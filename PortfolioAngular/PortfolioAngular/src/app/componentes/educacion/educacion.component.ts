import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }
  educationList:any;
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.educationList=data.education;
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }
  experienceList:any;
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.experienceList=data.experience;
    })
  }

}

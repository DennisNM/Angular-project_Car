import { MediaMatcher } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/Services/responsive-service.service';
import { car } from 'src/app/shared/Models/Car';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {

  carros:car[] = []
  screenSize: string = '';
  private mediaQueryList: MediaQueryList;
  isSmallScreen: boolean = false;

  constructor(private mediaMatcher: MediaMatcher , private responsiveService: ResponsiveService) {
    this.mediaQueryList = mediaMatcher.matchMedia('(min-width: 992px)');
  }

  ngOnInit(): void {
      
    this.adicionarCarro("Toyota Camry", "Sedan", "2020", "LE", "Prata" ,'/assets/imagens/toyata_camary.jpg');

    this.adicionarCarro("Honda Civic", "Sedan", "2021", "EX", "Azul" ,'/assets/imagens/honda_civic.jpg');

    this.adicionarCarro("Ford F-150", "Caminhonete", "2022", "XLT", "Prata",'/assets/imagens/Ford_F_150.jpg');

    this.adicionarCarro("Volkswagen Golf", "Hatchback", "2019", "GTI", "Preto",'/assets/imagens/golf.jpg');

    this.adicionarCarro("Tesla Model 3", "Sedan Elétrico", "2022", "Long Range", "Branco",'/assets/imagens/tesla_mode3.jpg');

    this.adicionarCarro("BMW 3 Series", "Sedan de Luxo", "2021", "330i", "Cinza",'/assets/imagens/bmw_serie3.jpg');

    this.adicionarCarro("Subaru Outback", "SUV", "2020", "Limited", "Azul",'/assets/imagens/subaru.jpg');

    this.adicionarCarro("Mercedes-Benz C-Class", "Sedan de Luxo", "2022", "C300", "Prata",'/assets/imagens/mercedes_classC.jpg');

    this.adicionarCarro("Ford Mustang", "Esportivo", "2021", "GT", "Amarelo",'/assets/imagens/mustang.jpg');

    this.adicionarCarro("Chevrolet Silverado", "Caminhonete", "2021", "LTZ", "Preto",'/assets/imagens/silverado.jpg');

    this.adicionarCarro("Audi A4", "Sedan de Luxo", "2022", "Premium", "Azul",'/assets/imagens/Audi.jpg');

    this.adicionarCarro("Toyota RAV4", "SUV", "2020", "XLE", "Prata",'/assets/imagens/Toyota_rav4.jpg');

    this.adicionarCarro("Nissan Altima", "Sedan", "2021", "SV", "Cinza",'/assets/imagens/altima.jpg');

    this.adicionarCarro("Jeep Wrangler", "SUV Off-Road", "2022", "Rubicon", "Vermelho",'/assets/imagens/Jeep.jpg');

    this.adicionarCarro("Hyundai Elantra", "Sedan", "2021", "SEL", "Branco",'/assets/imagens/hyundai_Elantra.jpg');
    this.responsiveService.getResizeObservable().subscribe((window: Window) => {
      this.isSmallScreen = window.innerWidth < 576; // Ou qualquer lógica que você preferir
    })


 
  }

  adicionarCarro(nome:any, tipo:any, ano:any, modelo:any, cor:any,image:any) {
    var carro:car = {
      nome: nome,
      tipo: tipo,
      ano: ano,
      modelo: modelo,
      cor: cor,
      image :image
    };
    this.carros.push(carro);
  }

  gerarNumeroAleatorio(valid?:string): number {
    if(valid == null || valid == "")
    return Math.floor(Math.random() * 100) + 1; // Gera um número entre 1 e 100 (ajuste conforme necessário)
    else
    return Math.floor(Math.random() * (200 - 80 + 1)) + 80;
  }









}

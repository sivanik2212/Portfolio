import { Component, OnInit } from '@angular/core';
import { Portfolio, PortfolioService } from '../service/portfolio.service';

@Component({
  selector: 'app-portfolio-data',
  templateUrl: './portfolio-data.component.html',
  styleUrls: ['./portfolio-data.component.css']
})
export class PortfolioDataComponent implements OnInit {

  

  portfolios: Portfolio[];
  displayDialog: boolean;
  portfolioForDialog: Portfolio;

  constructor(private portService: PortfolioService) { }

  ngOnInit() {
    this.portService.getPortfolios().
    subscribe(portfolios => this.portfolios = portfolios);
  }

  clonedPortfolios: { [s: string]: Portfolio; } = {};
  onRowEditInit(portfolio: Portfolio) {
    console.log('Row edit initialized');
    this.clonedPortfolios[portfolio.name] = { ...portfolio };
  }

  onRowEditSave(portfolio: Portfolio) {
    console.log('Row edit saved');
    this.portService.updatePortfolio(portfolio)
    .subscribe( data => {
      this.ngOnInit();
      alert("Portfolio Updated successfully.");
    });
   
  }

  onRowEditCancel(portfolio: Portfolio, index: number) {
    console.log('Row edit cancelled');
    this.portfolios[index] = this.clonedPortfolios[portfolio.name];
    delete this.clonedPortfolios[portfolio.name];
  }


  deletePortfolio(portfolio: Portfolio) {
    console.log('Portfolio Deleted');
     
    this.portService.deletePortfolio(portfolio)
      .subscribe( data => {
        this.ngOnInit();
        alert("Portfolio Deleted successfully.");
      });
      
  }

  onPortfolioAdd(){
    this.portfolioForDialog = {
      id:null,regNum:null,name: null, price: null, author: null
  };
    this.displayDialog = true;
  }

  savePortfolio(){
    console.log('Portfolio Saved');
    this.portService.createPortfolio(this.portfolioForDialog)
    .subscribe( data => {
      this.ngOnInit();
      alert("Portfolio Created successfully.");
    });
   
    this.displayDialog = false;
  }
}

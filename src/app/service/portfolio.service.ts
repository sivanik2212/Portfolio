import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Portfolio {
  id;
  regNum;
  name;
  price;
  author;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) {}

  getPortfolios() {
    return this.http.get<Portfolio[]>('http://localhost:8080/api/portfolios');
    }

    public updatePortfolio(portfolio) {
      return this.http.put<Portfolio>("http://localhost:8080/api/portfolios" + "/"+ portfolio.regNum,portfolio);
      } 
      
      public deletePortfolio(portfolio) {
        return this.http.delete<Portfolio>("http://localhost:8080/api/portfolios" + "/"+ portfolio.regNum);
      }  

      public createPortfolio(portfolio) {
        return this.http.post<Portfolio>("http://localhost:8080/api/portfolios", portfolio);
      }
}

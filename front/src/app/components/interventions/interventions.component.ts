import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Intervention } from "../../model/intervention.model"

@Component({
  selector: 'app-interventions',
  templateUrl: './interventions.component.html',
  styleUrls: ['./interventions.component.css']
})

export class InterventionsComponent {
  interventionsData: Intervention[] = [];
  surgeon: any;
  p: number = 1;
  loadingNextPage: boolean = false;
  
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.fetchInterventionsData();
  }

  fetchInterventionsData() {
    this.http.get('http://localhost:3000/Interventions/sorted/').subscribe( 
      (res: any) => {
        this.interventionsData = res;
      },
      (error: any) => {
        console.error('Error fetching data from API', error);
      }
      );
  }

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
    const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

    if (scrollDirection === 'down' && !this.loadingNextPage) {
      this.loadNextPage();
    } else if (scrollDirection === 'up' && !this.loadingNextPage) {
      this.loadPreviousPage();
    }
  }
  
  /***************************************  Utils ***************************************/

  loadNextPage() {
    this.loadingNextPage = true;  
    if (this.p < this.getMaxPage()) {
      this.p++;
    } else {
      this.p = 1;
    }
    setTimeout(() => {
      this.loadingNextPage = false;
    }, 1000);
  }
  
  loadPreviousPage() {
    this.loadingNextPage = true;  
    if (this.p > 1) {
      this.p--;
    }
    setTimeout(() => {
      this.loadingNextPage = false;
    }, 1000);
  }

  getMaxPage(): number { return Math.ceil(this.interventionsData.length / 10); }
  onPageChange(page: number) { this.p = page; }
  
  searchSurgeon() {
    if(this.surgeon == "") {
      this.ngOnInit();
    } else {
      this.p = 1;
      this.interventionsData = this.interventionsData.filter(res =>{
        return res.surgeon.toLocaleLowerCase().match(this.surgeon.toLocaleLowerCase());
      })
    }
  }
}
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
    this.http.get('http://localhost:3000/Interventions/sorted/').subscribe( 
      (res: any) => {
        this.interventionsData = res;
        console.log(this.interventionsData);
      },
      (error: any) => {
        console.error('Error fetching data from API', error);
      }
      );
  }

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
    const scrollDirection = event.deltaY > 0 ? 'down' : 'up';
    console.log('Scroll direction:', scrollDirection);

    if (scrollDirection === 'down' && !this.loadingNextPage) {
      this.loadNextPage();
    } else if (scrollDirection === 'up' && !this.loadingNextPage) {
      this.loadPreviousPage();
    }
  }
  
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

  getMaxPage(): number {
    return Math.ceil(this.interventionsData.length / 10);
  }
  
  onPageChange(page: number) {
    this.p = page;
  }
  
  searchSurgeon() {
    if(this.surgeon == "") {
      this.ngOnInit();
    } else {
      this.interventionsData = this.interventionsData.filter(res =>{
        return res.surgeon.toLocaleLowerCase().match(this.surgeon.toLocaleLowerCase());
      })
    }
  }
}
















// loadNextRows() {
//   this.indexFirst += 10;
//   this.indexLast += 10;
//   if (this.indexLast >= this.interventionsData.length) {
//     this.indexFirst = 0;
//     this.indexLast = 10;
//   }
// }


















// import { Component, HostListener } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map, take } from 'rxjs/operators';

// @Component({
//   selector: 'app-interventions',
//   templateUrl: './interventions.component.html',
//   styleUrls: ['./interventions.component.css']
// })
// export class InterventionsComponent {
//   constructor(private http: HttpClient) { }
  
//   interventionsData: any;
//   visibleRows = 10;
//   startIndex = 0;
//   endIndex = this.visibleRows;
//   isLoading = false;

//   ngOnInit() {
//     this.fetchDataFromAPI();
//   }

//   fetchDataFromAPI() {
//     this.isLoading = true;
//     this.http.get('http://localhost:3000/Interventions/sorted/')
//       .pipe(
//         map((data: any) => data.slice(0, this.visibleRows))
//       )
//       .subscribe({
//         next: (data: any) => {
//           this.interventionsData = data;
//           this.isLoading = false;
//           console.log(this.interventionsData);
//         },
//         error: (error: any) => {
//           console.error('Error fetching data from API:', error);
//           this.isLoading = false;
//         }
//       });
//   }
  
//   @HostListener('window:scroll', ['$event'])
//   onScroll(event: any) {
    
    


//     const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//     const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
//     const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
    
//     if (scrollPos + windowHeight >= documentHeight) {
//       console.log("scroll");
//       this.loadMoreData();
//     }
//   }
  
//   loadMoreData() {
//     this.isLoading = true;
//     this.startIndex = this.endIndex;
//     this.endIndex += this.visibleRows;
    
//     // console.log(this.interventionsData);
//     // console.log(this.startIndex);
//     // console.log(this.endIndex);
    
//     if (this.startIndex < this.interventionsData.length) {
//       const newData = this.interventionsData.slice(this.startIndex, this.endIndex);

//       console.log(newData);
//       // setTimeout(() => {
//       //   this.interventionsData = this.interventionsData.concat(newData);
//       //   this.isLoading = false;
//       //   console.log(this.interventionsData);
//       // }, 500); // Simulating delay for API call, remove this line in actual implementation
//     } 
//     else {
//       this.isLoading = false;
//     }
//   }

// }

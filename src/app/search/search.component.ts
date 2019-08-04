import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { SearchResult } from '../model/search-result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchResults: SearchResult[];
  private currentSearch: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search(e) {
    console.log('Searching...', e.target.value);
    this.currentSearch = e.target.value;
    this.searchService.getResults().subscribe(
      data => {
        console.log(data);
        this.searchResults = data;
      },
      error => {
        console.log(error);
      });
  }

}

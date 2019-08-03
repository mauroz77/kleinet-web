import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../model/page';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as InlineEditor from '@ckeditor/ckeditor5-build-inline';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  private page: Page;

  public Editor = InlineEditor;
  public isDisabled = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.page = {id: 'a', title: 'sasa', content:'sasa'}
    console.log(this.route.snapshot);
    
    let id = this.route.snapshot.paramMap.get('id');
    console.log('IF¡D', id);
    
  }

  onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    this.page.content = data;
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled
  }

  save() {
    console.log('save ', this.page.content);
    
  }

}

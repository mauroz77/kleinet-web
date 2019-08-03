import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../model/page';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Input() page: Page;

  public Editor = ClassicEditor;

  htmlContent = '';

  constructor() { }

  ngOnInit() {
    console.log('Page', this.page);
  }

}

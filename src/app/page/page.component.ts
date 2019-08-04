import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../model/page';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as InlineEditor from '@ckeditor/ckeditor5-build-inline';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  private page: Page = new Page();

  public Editor = InlineEditor;
  public isDisabled = false;

  constructor(private route: ActivatedRoute, private pageService: PageService) { }

  ngOnInit() {
    this.page = { id: 'a', title: 'sasa', content: 'sasa' }
    console.log(this.route.snapshot);

    let id = this.route.snapshot.paramMap.get('id');
    this.pageService.getPage(id).subscribe(
      data => {
        this.page = data;
        console.log('current page:', this.page);
      },
      error => { }
    );

  }

  public onReady( editor ) {
    console.log('editor onReady', editor);
    editor.setData(this.page.content);
  }

  onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    this.page.content = data;
  }

  check({ editor }: ChangeEvent) {
    console.log('Cha: ', editor);
    
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled
  }

  save() {
    console.log('save ', this.page.content);
    this.page.content = 'done';
  }

}

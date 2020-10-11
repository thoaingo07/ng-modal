import { ComponentType } from '@angular/cdk/portal';
import { Component, TemplateRef } from '@angular/core';
import { LeadEditComponent } from './leads/components/lead-edit/lead-edit.component';
import { LeadListComponent } from './leads/components/lead-list/lead-list.component';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-modal';
  content = 'Hello re-usable modal';
  contentType: 'template' | 'string' | 'component';
  leadEditComponent = LeadEditComponent;
  leadListComponent = LeadListComponent;
  leadEditData : any;
  constructor(private modalService: ModalService) { }

  open(content: TemplateRef<any> | ComponentType<any> | string) {
    const ref = this.modalService.open(content, null);

    ref.afterClosed$.subscribe(res => {
      if (typeof content === 'string') {

      } else if (content === this.leadEditComponent) {
        console.log(res);
        this.leadEditData = res.data;
      }
    });
  }
}

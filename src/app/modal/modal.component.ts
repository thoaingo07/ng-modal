import { Component, OnInit, TemplateRef, Type } from '@angular/core';
import { ModalOverlayRef } from './modal-overlay-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  contentType: 'template' | 'string' | 'component';
  content: string | TemplateRef<any> | Type<any>;
  context;

  constructor(private ref: ModalOverlayRef) { }

  close() {
    this.ref.close(null);
  }

  ngOnInit() {
    this.content = this.ref.content;

    if (typeof this.content === 'string') {
      this.contentType = 'string';
    } else if (this.content instanceof TemplateRef) {
      this.contentType = 'template';
      this.context = {
        close: this.ref.close.bind(this.ref)
      };
    } else {
      this.contentType = 'component';
    }
  }
}

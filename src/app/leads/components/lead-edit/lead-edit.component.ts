import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalOverlayRef } from 'src/app/modal/modal-overlay-ref';

@Component({
  selector: 'app-lead-edit',
  templateUrl: './lead-edit.component.html'
})
export class LeadEditComponent implements OnInit {

  frmSubscribe = this.fb.group({
    name: 'John Doe',
    email: [
      'johndoe@gmail.com',
      Validators.compose([Validators.email, Validators.required])
    ]
  });

  constructor(private fb: FormBuilder, private ref: ModalOverlayRef) { }

  ngOnInit() { }

  submit() {
    this.ref.close(this.frmSubscribe.value);
  }

  cancel() {
    console.log(new Date().getMilliseconds());
    this.ref.close(null);
  }
}

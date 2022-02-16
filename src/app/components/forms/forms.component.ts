import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  profileForm: FormGroup;
  formList: FormArray;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formList = this.formBuilder.array([
      this.profileForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: [''],
        email: ['', Validators.required],
        phoneNumber: [''],
        position: [''],
        company: ['']
      })
    ])
  }

  addRow() {
    this.formList.push(this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', Validators.required],
      phoneNumber: [''],
      position: [''],
      company: ['']
    })) 
  }

  check() {
    console.log(this.formList)
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.profileForm.reset();
  }

}

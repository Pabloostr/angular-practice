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
  // formList: FormArray;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.formList = this.formBuilder.array([
    //   this.profileForm = this.formBuilder.group({
    //     firstName: ['', Validators.required],
    //     lastName: [''],
    //     email: ['', Validators.required],
    //     phoneNumber: [''],
    //     position: [''],
    //     company: ['']
    //   })
    // ])
    this.profileForm = this.formBuilder.group({
      formList: this.formBuilder.array([
        this.profileForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: [''],
          email: ['', Validators.required],
          phoneNumber: [''],
          position: [''],
          company: ['']
        })
      ])
    })
  }

  getCharValuesFormControls(): FormArray {
    return <FormArray>this.profileForm.get('formList');
  }

  buildInfoSection() {
    return {
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', Validators.required],
      phoneNumber: [''],
      position: [''],
      company: ['']
    }
  }

  addRow() {
    // this.formList.push(this.formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: [''],
    //   email: ['', Validators.required],
    //   phoneNumber: [''],
    //   position: [''],
    //   company: ['']
    // })) 
    this.getCharValuesFormControls().push(
      this.formBuilder.group(this.buildInfoSection())
    )
  }

  check() {
    console.log(this.profileForm)
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.profileForm.reset();
  }
  
  removeValue(index: number) {
    this.getCharValuesFormControls().removeAt(index);
  }

}

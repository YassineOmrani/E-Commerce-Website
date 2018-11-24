import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    messageForm: FormGroup;
    submitted: boolean = false;
    success: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      email: ['', Validators.required ],
      message: ['', Validators.required ]
    });
  }

  onSubmit(){
    this.submitted = true;

    if ( this.messageForm.invalid){
      return;
    }

    this.success = true;
  }
}

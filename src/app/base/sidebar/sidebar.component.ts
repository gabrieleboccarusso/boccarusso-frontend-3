import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  searchForm: FormGroup = new FormGroup({
    searchValue: new FormControl(''),
  });

  constructor() {}

  onSubmit(form: FormGroup) {
    console.log(form.value.searchValue);
   }
}

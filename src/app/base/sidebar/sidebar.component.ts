import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  searchForm: FormGroup = new FormGroup({
    searchValue: new FormControl(''),
  });

  constructor(
    private router: Router
  ) {}

  onSubmit(form: FormGroup) {
    console.log(form.value.searchValue);
    this.router.navigateByUrl('');
   }
}

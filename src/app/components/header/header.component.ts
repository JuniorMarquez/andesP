import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface'; 
import {DataApiService} from '../../services/data-api.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserWService } from "../../services/user-w.service";
import { isError } from 'util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmEqualValidatorDirective } from '../../confirm-equal-validator.directive';

declare var NgForm:any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {





  constructor() { }


    

  ngOnInit() {

  }

 


}


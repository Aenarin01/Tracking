import {Component, OnDestroy, OnInit} from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  hide = true;

  // @ts-ignore
  form: FormGroup;
  loading = false;
  submitted = false;
  // @ts-ignore
  aSub: Subscription

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

    this.route.queryParams.subscribe((params: Params) =>{

      if(params['accessDenied']){
       this.router.navigate(['/auth/login'])
        alert("Пожалуйста авторизируйтесь в сестеме")
      }else if(params['sessionFailed']){
        this.router.navigate(['/auth/login'])
      }
    })

  }

  ngOnDestroy() {
    if (this.aSub)
      this.aSub.unsubscribe()
  }

  submit() {
    this.form.disable()

    this.aSub = this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(['/main']),
      error => {
        error.error;
        this.form.enable()
      }
    )
  }

  @Input()
  error!: string | null;
}

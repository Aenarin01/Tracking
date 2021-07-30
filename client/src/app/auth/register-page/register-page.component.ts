import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit, OnDestroy {

  hide = true

  //@ts-ignore
  aSub: Subscription
  form: FormGroup
  constructor(private auth: AuthService,
              private router: Router) {

  }

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.email]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
    this.form.disable()
    this.aSub = this.auth.register(this.form.value).subscribe(
      () => {
        this.router.navigate(['/auth/login'], {queryParams: {registered: true}
          })
      },
      error => {
        error.error;
        this.form.enable()
      }
    )
  }

  @Input()
  error!: string | null;

  @Output() submitEM = new EventEmitter();

}

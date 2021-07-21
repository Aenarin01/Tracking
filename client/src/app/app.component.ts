import {Component} from '@angular/core';
import {HelloService} from "./services/hello.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HelloService]
})
export class AppComponent {

  helloMessage: string | any;
  done: boolean = false;

  constructor(private helloService: HelloService) {}

  ngOnInit(){
    this.helloService.getName().subscribe((data: any) => {
      this.helloMessage = data.result;
      this.done = true;
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/inter/interface/interface.component';
import { RegisterService} from 'src/app/services/services/services.component';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
  user:Array<user>;
  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
    this.registerService.show().subscribe(data => {this.user = data})
  }
}

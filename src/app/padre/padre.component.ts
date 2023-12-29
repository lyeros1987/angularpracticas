import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  valor_contador: number = 0;

  incrementar(){
       this.valor_contador ++;
    }

  decrementar(){
    this.valor_contador --;
  }
}

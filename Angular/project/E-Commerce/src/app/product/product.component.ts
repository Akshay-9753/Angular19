import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
@Input() title='';
@Input() price='';
@Input() desc='';
@Input() imageUrl='';
showDetails=false
fun(){
  if(this.showDetails)
    this.showDetails=false
  else
  this.showDetails=true
}

}
